const nextConfig = {
  distDir: ".next",
  env: { storyblokApiToken: process.env.STORYBLOK_API_TOKEN },
  experimental: {},
  future: {},
  images: {
    domains: ["https://www.publishersweekly.com", "a.storyblok.com"]
  },
  trailingSlash: true
};

module.exports = nextConfig;
