const path = require('path')

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
    return config
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }

  /*
  exportPathMap: () => ({
    '/': { page: '/' },
    '/produto/tratamento-completo': { page: '/produto', query: { id: 'tratamento-completo' } },
    '/produto/platinado-definitivo-hidratacao': { page: '/produto', query: { id: 'platinado-definitivo-hidratacao' } },
    '/produto/fim-do-amarelado': { page: '/produto', query: { id: 'fim-do-amarelado' } }
  })
*/
}
