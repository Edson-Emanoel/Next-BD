import Menu from "./Menu";

interface PaginaProps {
  children: any;
  className?: string;
}

const Pagina = (props: PaginaProps) => {
  return (
    <div className="flex">
      <Menu />
      <main className={`flex-1 p-7 ${props.className ?? ''}`}>{props.children}</main>
    </div>
  );
};

export default Pagina;
