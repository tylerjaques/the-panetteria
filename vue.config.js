require = require('esm')(module);
const { routes } = require('./src/routes.js');

module.exports = {
  pluginOptions: {
    sitemap: {
      baseURL: 'https://www.thepanetteria.com',
      routes,
    }
  }
}
