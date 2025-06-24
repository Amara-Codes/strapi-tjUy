module.exports = [
    'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*', // Allows all headers
      origin: ['http://localhost:3000', 'https://amarapub-production.up.railway.app', 'https://amara.pub'], // Add your frontend origins here
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'], // Allowed HTTP methods
      credentials: true, // If you need to send cookies or authorization headers with credentials
    },
  },
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
