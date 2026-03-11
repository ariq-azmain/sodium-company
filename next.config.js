"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};
exports.default = nextConfig;
