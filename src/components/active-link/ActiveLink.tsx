'use client';

import Link from "next/link";
import style from './ActiveLink.module.css';
import { usePathname } from "next/navigation";
//rfc

interface Props{
    path:string;
    text:string;
}

export const ActiveLink = ({path , text}:Props) => {
const PathName=usePathname();

  return (
    <Link 
    className={`${style.link} ${ (PathName===path) && style['active-link']}`}
    href={path}>
        {text }
    </Link>
   
  )
}
