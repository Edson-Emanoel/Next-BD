import { Usuario } from "@/src/core/model/Usuario"

export interface LinhaUsuarioProps {
      usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps){
      return(
            <div className="flex p-4">
                  <span>{props.usuario.nome}</span>
            </div>
      )
}