const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('produto', '/produto/:id')
routes.add('carrinho', '/carrinho')
