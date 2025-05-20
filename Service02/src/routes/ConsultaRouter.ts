import fastify,{FastifyInstance} from "fastify";
import { ConsultaController } from "../controller/ConsultaController";

export async function consultaRouter(fastify: FastifyInstance) {
    fastify.get('/getConsulta',ConsultaController.fetchAllConsult)
    fastify.post('/postConsulta',ConsultaController.registerConsultation)
    
}