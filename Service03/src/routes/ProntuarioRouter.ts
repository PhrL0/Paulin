import fastify,{FastifyInstance} from "fastify";
import { ProntuarioController } from "../controller/ProntuarioController";

export async function prontuarioRouter(fastify: FastifyInstance) {
    fastify.get('/getProntuario',ProntuarioController.fetchAllMedicalRecords)
    fastify.post('/postProntuario',ProntuarioController.registerMedicalRecords)
    
}