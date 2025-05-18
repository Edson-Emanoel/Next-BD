import { IconHome, IconUser } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <aside className="w-72 h-screen bg-zinc-900">
      <nav className="flex flex-col gap-1 py-7">
        <MenuItem icone={IconHome} texto="Home" url="/" />
        <MenuItem icone={IconUser} texto="Cadastro de Usuário" url="/usuarios" />
      </nav>
    </aside>
  );
};

export default Menu;
