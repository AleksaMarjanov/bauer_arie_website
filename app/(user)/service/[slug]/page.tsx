import { HeroServices } from '@/components';
import { RichTextComponents } from '@/components/RichTextComponent';
import { client } from '@/lib/sanity.client';
import { urlFor } from '@/lib/urlFor';
import { Services } from '@/typings';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';


type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 60; // revalidate this page every 60 seconds

// get dynamic params for each service 
export async function generateStaticParams() {
    const query = groq`
		*[_type == "services"]
		{
			slug
		}
		`;
    const slugs: Services[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug,
    }));
}

async function Service({ params: { slug } }: Props) {
    // fetch data for only listing that is active/clicked
    const query = groq`
		*[_type == "services" && slug.current == $slug][0] {
			...,
			author->,
			categories[]->,
		}
	`;

    const service: Services = await client.fetch(query, { slug });

    return (
        <>
            <HeroServices
                message={service.headingMessage}
                heading={service.headingHero}
                src={urlFor(service.mainImage).url()}
            />
            <article className="min-h-screen py-36 text-center">
                <h1 className="font-bold text-3xl md:text-6xl my-6">{service.title}</h1>
                <div className="p-6 lg:p-32">
                    <PortableText value={service.body} components={RichTextComponents} />
                </div>
            </article>
        </>
    )

}

export default Service;
