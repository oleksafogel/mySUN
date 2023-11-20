/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=15552000; includeSubDomains'
                    },
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'same-origin-allow-popups'
                    },
                    {
                        key: 'X-Powered-By',
                        value: 'false'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Set-Cookie',
                        value: 'session=${sessionId}; Path=/; Max-Age=600; SameSite=Strict; HttpOnly; Secure'
                    },
                ],
            },
        ]
    }
}

module.exports = nextConfig;