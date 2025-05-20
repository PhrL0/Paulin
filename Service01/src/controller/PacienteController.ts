import { PacienteRepository } from "../infrastructure/repositorie/PacienteRepository";
import { FastifyReply, FastifyRequest } from "fastify";

export const PacienteController = {
    fetchAllPatients: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const response = await PacienteRepository.fetchAllPatient();

            return reply.send({
                success: true,
                data: response,
            });
        } catch (error) {
            console.error("Erro na controller paciente", error);
            reply.status(500).send({
                error: 'Erro interno ao processar a requisição',
                message: error || 'Erro desconhecido'
            });
        }
    },

    patientRegistration: async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
        try {
            const { nome, cpf, dataNascimento, telefone, email } = request.body as {
                nome: string;
                cpf: string;
                dataNascimento: string;
                telefone: string;
                email: string;
            };

            if (!nome) {
                return reply.status(400).send({ error: 'Nome é obrigatório.' });
            }

            const response = await PacienteRepository.patientRegistration(
                nome,
                cpf,
                dataNascimento,
                telefone,
                email
            );

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
};
