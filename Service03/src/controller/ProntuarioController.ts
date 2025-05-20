import { ProntuarioRepository } from "../infrastructure/repositorie/ProntuarioRepository";
import { FastifyReply,FastifyRequest } from "fastify";

export const ProntuarioController = {
    fetchAllMedicalRecords: async(request: FastifyRequest, reply: FastifyReply): Promise<void> =>{
        try{
            const response = await ProntuarioRepository.fetchAllMedicalRecords();
            
            return reply.send({
                success: true,
                data:response,
            });
        } catch (error) {
            console.error("Erro na controller prontuario", error);
            reply.status(500).send({
                error: 'Erro interno ao processar a requisição',
                message: error || 'Erro desconhecido'
            });
        }
    },
    registerMedicalRecords: async(request: FastifyRequest, reply: FastifyReply): Promise<void> =>{
        try{
            const {description, consultId} = request.body as {description: string, consultId: number}

            if (!description) {
                return reply.status(400).send({ error: 'Descrição é obrigatório.' });
            }

            const response = await ProntuarioRepository.registerMedicalRecords(description,consultId)
            
            if (response) {
                return reply.status(200).send({
                    success: true
                });
            }

        } catch (error) {
            console.error("Erro na controller prontuario", error);
            reply.status(500).send({
                error: 'Erro interno ao processar a requisição',
                message: error || 'Erro desconhecido'
            });
        }
    }
}