// next.config.mjs
const config = {
  images:{
      domains:['images.unsplash.com']
  },
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.resolve.alias['@emotion/core'] = '@emotion/react';
    config.resolve.alias['@emotion/styled'] = '@emotion/styled';
    return config;
  },
};

export default config;
