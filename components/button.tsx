"use client"

import { signOut } from "next-auth/react";

type ButtonType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}
export default function Button({onClick, children}:ButtonType){
  return(
    <button onClick={()=>signOut({callbackUrl:'/login'})}>{children}</button>

  )
}