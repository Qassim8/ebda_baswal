import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // إذا دخل المستخدم على الرابط الرئيسي /
        source: "/",
        // حوله تلقائياً إلى النسخة العربية /ar
        destination: "/ar",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
