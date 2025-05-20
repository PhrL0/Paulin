import { ConsultaRepository } from "../infrastructure/repositorie/ConsultaRepository";
import { FastifyReply,FastifyRequest } from "fastify";

export const ConsultaController = {
    fetchAllConsult: async(request: FastifyRequest, reply: FastifyReply): Promise<void> =>{
        try{
            const response = await ConsultaRepository.fetchAllConsult();
            
            return reply.send({
                success: true,
                data:response,
            });
        } catch (error) {
            console.error("Erro na controller paciente", error);
            reply.status(500).send({
                error: 'Erro interno ao processar a requisição',
                message: error || 'Erro desconhecido'
            });
        }
    },
    registerConsultation: async(request: FastifyRequest, reply: FastifyReply): Promise<void> =>{
        try{
            const {reason, patientId} = request.body as {reason: string, patientId: number}

            if (!reason) {
                return reply.status(400).send({ error: 'Motivo é obrigatório.' });
            }

            const response = await ConsultaRepository.registerConsultation(reason,patientId);
            
            if (response) {
                return reply.status(200).send({
                    success: true
                });
            }

        } catch (error) {
            console.error("Erro na controller paciente", error);
            reply.status(500).send({
                error: 'Erro interno ao processar a requisição',
                message: error || 'Erro desconhecido'
            });
        }
    }
}