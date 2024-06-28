/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    images: {
        domains: ['firebasestorage.googleapis.com'], // Kullanacağınız domainleri buraya ekleyin
      },
};

export default nextConfig;


