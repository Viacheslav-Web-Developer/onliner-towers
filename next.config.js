/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.pdf$/i,
            use: "raw-loader",
        });
        return config;
    },
    output: 'export',
}

module.exports = nextConfig;
