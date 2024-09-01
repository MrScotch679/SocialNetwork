import jsonServer from 'json-server'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dbFilePath = path.resolve(__dirname, 'db.json')

const server = jsonServer.create()
const router = jsonServer.router(dbFilePath)
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/echo', (req, res) => {
	res.jsonp(req.query)
})

server.use(jsonServer.bodyParser)

server.use(async (req, res, next) => {
	await new Promise(res => {
		setTimeout(res, 1000)
	})
	next()
})

// server.use((req, res, next) => {
// 	if (!req.headers.authorization) {
// 		return res.status(403).json({ message: 'AUTH ERROR' })
// 	}

// 	next()
// })

server.post('/login', (req, res) => {
	const { username, password } = req.body

	let db

	try {
		db = JSON.parse(fs.readFileSync(dbFilePath, 'UTF-8'))
	} catch (error) {
		return res.status(500).json({ message: error.message })
	}

	const user = db.users.find(
		user => user.username === username && user.password === password
	)

	if (!user) {
		return res.status(404).json({ message: 'User not found' })
	} else {
		return res.jsonp(user)
	}
})

server.use(router)

server.listen(3000, () => {
	console.log('JSON Server is running')
})
