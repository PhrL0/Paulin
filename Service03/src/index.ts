import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prontuarioRouter } from './routes/ProntuarioRouter'
const fastify = Fastify({ logger: true })

fastify.register(cors, {
  origin: true, 
})

fastify.register(prontuarioRouter)

async function start() {
  try {
    await fastify.listen({ port: 3001 })
    console.log('🚀 HTTP rodando em http://localhost:3001')

  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()