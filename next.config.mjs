/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: () => {
        return [
                {
                    source: "/",
                    destination: "/first-route" 
                },
                {
                    source: "/segunda-rota",
                    destination: "/segunda-rota"
                },
                {
                    source: "/terceira-rota",
                    destination: "/terceira-rota"
                }
            ]
        
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'dragonball-api.com',
          },
        ],
      },

};

export default nextConfig;