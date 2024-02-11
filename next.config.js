/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'static.xx.fbcdn.net' },
            { hostname: 'lh3.googleusercontent.com' },
            { hostname: 'avatars.githubusercontent.com' }
            // Add more objects if you have more domains
        ],
    },
}

module.exports = nextConfig
