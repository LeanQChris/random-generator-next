/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.redd.it", "images.dog.ceo", "animechan.xyz"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
}

module.exports = nextConfig
