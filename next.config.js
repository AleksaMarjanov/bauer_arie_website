/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            'www.instagram.com',
            'www.facebook.com',
            'cdn.sanity.io',
        ]
    },
    env: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
    }
}

module.exports = nextConfig
