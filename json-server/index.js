import jsonServer from 'json-server'
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
	res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.post('/login', (req, res, next) => {
	const { username, password } = req.body

	console.log('req', req)
	console.log('res', res)

	return res.status(403).json(req.body)
})

// Use default router
server.use(router)
server.listen(3000, () => {
	console.log('JSON Server is running')
})
