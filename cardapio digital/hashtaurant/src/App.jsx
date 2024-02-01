import { useState } from "react";
import Hashtaurant from "./assets/hashtaurante.webp";
import './App.css';
import { Navegação } from "./Navegação";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";


export function App() {
  const paginasMenu = [pratosPrincipais, sobremesas, bebidas]
  const [paginaSelecionada, atualizarPaginaSelecionada] =useState(0);

  return (
    <>
      <img src={Hashtaurant} alt="" className="capa"/>
      <Navegação atualizarPaginaSelecionada={atualizarPaginaSelecionada}/>
      <div className="menu">
        {paginasMenu[paginaSelecionada].map(item => <ItemCardapio nome={item.nome} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>) }
      </div>
    </>
  );
}
