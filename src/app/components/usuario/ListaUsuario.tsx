import { Usuario } from "@/src/core/model/Usuario";
import usuarios from "../../data/constants/usuarios"
import LinhaUsuario from "./LinhaUsuario";

export default function ListaUsuario(){
      return(
            <div className="flex flex-col gap-4">
                  {usuarios.map((usuario: Usuario) => (
                        <LinhaUsuario key={usuario.id} usuario={usuario} />
                  ))}
            </div>
      )
}