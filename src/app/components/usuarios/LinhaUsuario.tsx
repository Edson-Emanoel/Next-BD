import Image from "next/image"
import { Usuario } from "@/src/core/model/Usuario"

export interface LinhaUsuarioProps {
      usuario: Usuario
}

export default function LinhaUsuario(props: LinhaUsuarioProps){
      return(
            <div className="flex bg-zinc-900 items-center gap-2 p-2 rounded-sm">
                  <Image
                        src="/avatar.png"
                        width={60}
                        height={60}
                        className="rounded-full"
                        alt={`Ícone de Perfil de: ${props.usuario.nome}`}
                  />
                  <div className="flex flex-col">
                        <span className="text-xl font-semibold">{props.usuario.nome}</span>
                        <span className="text-sm text-zinc-400">{props.usuario.email}</span>
                  </div>
            </div>
      )
}