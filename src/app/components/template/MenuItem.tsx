import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
  icone: ElementType;
  texto: string;
  url: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={`${props.url}`}
      className="gap-2 flex px-4 py-2 hover:bg-black"
    >
      <props.icone className="text-zinc-200" size={24} stroke={1} />
      {props.texto}
    </Link>
  );
}
