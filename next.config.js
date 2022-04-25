/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["links.papareact.com", "images.unsplash.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibG9uZ2RuZHR1IiwiYSI6ImNsMW90N3I2NjA4c3ozam9oYW5tdHNoNG4ifQ.JCCrffrdl6fWRbGlSZfjDw",
    client_id_google:
      "241209180407-4lak3hj98vs3s441heh6v3dq13mupqo4.apps.googleusercontent.com",
  },
};

module.exports = nextConfig;
