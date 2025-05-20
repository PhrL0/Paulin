import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PacienteRepository = {

  fetchAllPatient: async (): Promise<any[]> => {
    return await prisma.paciente.findMany({
      include: {
        consultas: true,
      },
    });
  },

  patientRegistration: async (name: string, cpf: string, dateBirth: string, tel: string, email: string): Promise<any> => {
    try {
      const result = await prisma.paciente.create({
        data: {
          nome: name,
          cpf: cpf,
          dataNascimento: new Date(dateBirth), 
          telefone: tel,
          email: email,
        },
      });

      return result;
    } catch (err) {
      console.error("Erro ao cadastrar paciente:", err);
      throw err; 
    }
  },
};
