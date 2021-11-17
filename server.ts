
import fast from 'fastify'
const fastify = fast({ logger: true })

fastify.addHook('onRequest', async (request, reply) => {
    if (request.headers['x-forwarded-proto']) {
        if (request.headers['x-forwarded-proto'] === 'http') {
            return reply.redirect(`https://${request.headers.host}${request.raw.url}`)
        }
    }
})

fastify.listen(port, '0.0.0.0')