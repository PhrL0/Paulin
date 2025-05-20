import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ConsultaRepository = {
    fetchAllConsult: async(): Promise<any[]> =>{
        return await prisma.consulta.findMany();
    },
    
    registerConsultation: async(reason: string, patientId: number): Promise<any> =>{
        try{
            const result = await prisma.consulta.create({
                data: {
                    dataHora: new Date("2025-05-20T14:30:00Z"),
                    motivo: reason,
                    pacienteId: patientId,
                }
            });

            return result;
        } catch (err){
            console.error("Erro ao cadastrar paciente:", err);
            throw err; 
        }
    }
}