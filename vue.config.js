// Define routes inline to avoid ESM/CommonJS compatibility issues
// Routes are also defined in src/routes.js for the router
const routes = [
  {
    path: '/',
    name: 'index',
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '/contact',
    name: 'contact',
  },
  {
    path: '/menu',
    name: 'menu',
  },
];

module.exports = {
  pluginOptions: {
    sitemap: {
      baseURL: 'https://www.thepanetteria.com',
      routes,
    }
  }
}
