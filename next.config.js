/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        scrollRestoration: true,
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
        apiKey: process.env.REACT_APP_LEAFLET_API_KEY,
    }
}

module.exports = nextConfig
