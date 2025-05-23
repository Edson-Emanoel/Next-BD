'use client'
import { useState } from "react";
import { IconUser } from "@tabler/icons-react";
import { Usuario } from "@/src/core/model/Usuario";
import usuarios from "../../data/constants/usuarios";
import Pagina from "../../components/template/Pagina";
import Titulo from "../../components/template/Titulo";
import ListaUsuario from "../../components/usuario/ListaUsuario";
import FormularioUsuario from "../../components/usuario/FormularioUsuario";

const Page = () => {
      const [usuario, setUsuario] = useState<Usuario>(usuarios[0])

      return (
            <Pagina className="flex flex-col gap-10">
                  <Titulo icone={IconUser} principal="Usuários" segundario="Cadastro de Usuários" />
                  {/* <ListaUsuario /> */}
                  <FormularioUsuario usuario={usuario} onChange={setUsuario} />
            </Pagina>
      );
}
 
export default Page;