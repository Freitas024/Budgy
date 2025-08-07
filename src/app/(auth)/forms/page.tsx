"use client";

import {useAuth} from "@/hooks/useAuth";


export default function Home(){
  useAuth();
  
  return(
    <div className="">
      <form>
        <label>Nome</label>
        <input placeholder="informacao..."/>
        <label>Nome</label>
        <input placeholder="informacao..."/>
        <label>Nome</label>
        <input placeholder="informacao..."/>
        <label>Nome</label>
        <input placeholder="informacao..."/>
        <label>Nome</label>
        <input placeholder="informacao..."/>
        <button>Enviar</button>
      </form>
    </div>
  )
}