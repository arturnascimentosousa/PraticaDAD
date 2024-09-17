import carne from "../../assets/carne.png"
import bacon from "../../assets/bacon.png"
import nao_sei_o_nome_da_carne from "../../assets/nao-sei-o-nome-da-carne.png"
import * as S from "./styles.js";

export const ProdutoOutros = ({icon}) => {
    return (
      <>
      <S.supremeDiv>
        <S.bigDiv>
            <S.imagem src={carne}></S.imagem>
            <S.divTextos>
                <S.item>Item 1</S.item>
                <S.desc>1kg/preço</S.desc>
                <S.preco>R$ 000.000</S.preco>
            </S.divTextos>
            <S.icon src={icon}></S.icon>
        </S.bigDiv>
        <S.bigDiv>
            <S.imagem src={bacon}></S.imagem>
            <S.divTextos>
                <S.item>Item 1</S.item>
                <S.desc>1kg/preço</S.desc>
                <S.preco>R$ 000.000</S.preco>
            </S.divTextos>
            <S.icon src={icon}></S.icon>
        </S.bigDiv>
        <S.bigDiv>
            <S.imagem src={nao_sei_o_nome_da_carne}></S.imagem>
            <S.divTextos>
                <S.item>Item 1</S.item>
                <S.desc>1kg/preço</S.desc>
                <S.preco>R$ 000.000</S.preco>
            </S.divTextos>
            <S.icon src={icon}></S.icon>
        </S.bigDiv>
        </S.supremeDiv>
      </>
      )
    }