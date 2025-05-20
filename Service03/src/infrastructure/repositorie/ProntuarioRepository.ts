import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ProntuarioRepository = {
    fetchAllMedicalRecords: async(): Promise<any[]> =>{
        return await prisma.prontuario.findMany();
    },
    
    registerMedicalRecords: async(description: string, consultId: number): Promise<any> =>{
        try{
            const result = await prisma.prontuario.create({
               data: {
                  consultaId:consultId,
                  descricao:description
                },
            });

            return result;
        } catch (err){
            console.error("Erro ao cadastrar prontuario:", err);
            throw err; 
        }
    }
}