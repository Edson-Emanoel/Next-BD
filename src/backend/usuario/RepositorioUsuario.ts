import { PrismaClient } from "@prisma/client";
import { Usuario } from "../../core/model/Usuario";

export default class RepositorioUsuario {
      private static db: PrismaClient = new PrismaClient()
      
      static async salvar(usuario: any){
            return await this.db.usuario.create.upsert({
                  where: { id: usuario.id },
                  update: usuario,
                  create: usuario,
            })
      }
      
      static async obterTodos(): Promise<Usuario[]>{
            return await this.db.usuario.findMany();
      }
      
      static async obterPorId(id: string): Promise<Usuario>{
            const usuario = await this.db.usuario.findUnique({ where: { id } });

            return usuario as Usuario
      }
}