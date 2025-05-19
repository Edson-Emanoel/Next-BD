import { IconUser } from "@tabler/icons-react";
import Pagina from "../../components/template/Pagina";
import Titulo from "../../components/template/Titulo";
import ListaUsuario from "../../components/usuarios/ListaUsuario";

const Page = () => {
      return (
            <Pagina>
                  <Titulo
                        icone={IconUser}
                        principal="Usuários"
                        segundario="Cadastro de Usuários"
                  />
                  <ListaUsuario />
            </Pagina>
      );
}
 
export default Page;