/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'static.xx.fbcdn.net' },
            // Add more objects if you have more domains
        ],
    },
}

module.exports = nextConfig
