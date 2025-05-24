'use client'
import { useState } from "react";
import Backend from "@/src/backend";
import { IconPlus, IconUser } from "@tabler/icons-react";
import { Usuario } from "@/src/core/model/Usuario";
import usuarios from "../../data/constants/usuarios";
import Pagina from "../../components/template/Pagina";
import Titulo from "../../components/template/Titulo";
import ListaUsuario from "../../components/usuario/ListaUsuario";
import FormularioUsuario from "../../components/usuario/FormularioUsuario";

const Page = () => {
      const [usuarios, setUsuarios] = useState<Usuario[]>([])
      const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null)

      function salvar() {
            if(!usuario) return;
            Backend.usuario.salvar(usuario)
      }

      return (
            <Pagina className="flex flex-col gap-10">
                  <Titulo icone={IconUser} principal="Usuários" segundario="Cadastro de Usuários" />
                  {/* <ListaUsuario /> */}
                  <div className="flex justify-end">
                        <button className="bg-blue-500 px-4 py-2 rounded-md"
                              onClick={() => setUsuario({})}>
                              <IconPlus />
                              <span>Novo Usuário</span>
                        </button>
                  </div>
                  {usuario ? (
                        <FormularioUsuario
                              usuario={usuario}
                              onChange={setUsuario}
                              salvar={salvar}
                              cancelar={() => setUsuario(null)}
                        />
                  ) : (
                        <ListaUsuario onClick={setUsuario} />
                  )}
                  
            </Pagina>
      );
}
 
export default Page;