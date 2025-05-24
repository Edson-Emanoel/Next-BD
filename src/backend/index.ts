import obterTodos from './usuario/obterTodos';
import salvarUsuario from './usuario/salvarUsuario';

export default class Backend {
      static readonly usuario = {
            salvar: salvarUsuario,
            obter: obterTodos
      }
}