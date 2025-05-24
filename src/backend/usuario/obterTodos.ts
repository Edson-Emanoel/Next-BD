'use server'

import { Usuario } from "@/src/core/model/Usuario";
import RepositorioUsuario from "./RepositorioUsuario";

export default async function obterTodos(usuario: Usuario){
      return RepositorioUsuario.obterTodos()
}