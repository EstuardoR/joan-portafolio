import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true
    },
    images: {
        qualities: [75, 90],
    },
};

export default nextConfig;
