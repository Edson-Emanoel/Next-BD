import Image from "next/image"
import { Usuario } from "@/src/core/model/Usuario"

export interface LinhaUsuarioProps {
    usuario: Usuario;
    onClick?: (usuario: Usuario) => void;
}

export default function LinhaUsuario(props: LinhaUsuarioProps){
    return(
        <div className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer"
        onClick={() => props.onClick?.(props.usuario)}>
            <Image
                src="/avatar.png"
                width={80}
                height={80}
                className="rounded-full"
                alt="Avatar"
            />
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    )
}