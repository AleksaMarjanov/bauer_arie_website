import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const apiVersion = '2022-11-15'

export const client = createClient({

    projectId,
    dataset,
    apiVersion,
    useCdn: true,
})


