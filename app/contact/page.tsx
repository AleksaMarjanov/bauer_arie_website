import { HeroServices } from "@/components"
import ContactForm from "@/components/ContactForm"

const Contact = () => {

    return (
        <main className="w-full flex items-center justify-center flex-col">
            <div className="relative w-full h-screen">
                <HeroServices src="/dentures.jpg" heading="Get in Touch" message="Fill Out Form Below" />
            </div>
            <ContactForm />
            <h3 className="text-teal-600 text-3xl py-6 md:text-6xl font-bold">Contact our Expert team!</h3>
        </main>

    )
}

export default Contact
