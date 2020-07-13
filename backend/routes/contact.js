const Router = require('koa-router')
const router = new Router()
const contact = require('../controllers/contact')

router.post('/', contact.sendTelegram) // google

module.exports = router.routes()
