import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProdutoCliente } from "./components/ProdutosCliente";
import { ProdutoOutros } from "./components/ProdutosOutros";
import { Cliente } from "./components/Cliente"
import { Outros } from "./components/Outros"
import  iconVerde from "./assets/icon-verde.svg"
import  iconVermelho from "./assets/icon-vermelho.svg"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cliente></Cliente>
    <ProdutoCliente icon={iconVermelho}></ProdutoCliente>
    <Outros></Outros>
    <ProdutoOutros icon={iconVerde}></ProdutoOutros>
  </StrictMode>,
)
