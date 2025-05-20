import fastify,{FastifyInstance} from "fastify";
import { PacienteController } from "../controller/PacienteController";

export async function pacienteRouter(fastify: FastifyInstance) {
    fastify.get('/getPaciente', PacienteController.fetchAllPatients)
    fastify.post('/postPaciente', PacienteController.patientRegistration)
}