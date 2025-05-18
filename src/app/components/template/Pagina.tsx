import Menu from "./Menu";

interface PaginaProps {
  children: any;
}

const Pagina = (props: PaginaProps) => {
  return (
    <div className="flex ">
      <Menu />
      <main className="flex-1 p-7">{props.children}</main>
    </div>
  );
};

export default Pagina;
