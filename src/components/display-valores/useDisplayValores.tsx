import { ETipoValorEnum } from "../../shared/enum/ETipoValorEnum";
import { ValorModel } from "../../shared/models/ValorModel";
import { useState } from "react";
import { CardValorProps } from "./card-valor";

const mockEntradas: ValorModel[] = [
  {
    tipoValor: ETipoValorEnum.ENTRADA,
    valor: 25.50,
    descricao: "Primeiro registro"
  },
  {
    tipoValor: ETipoValorEnum.ENTRADA,
    valor: 25.50,
    descricao: "Segundo registro"
  }
];




export default function useDisplayValores() {
  // @ts-ignore
  const [valoresEntradas, setValoresEntradas] = useState<ValorModel[]>(mockEntradas);
  // @ts-ignore
  const [valoresSaidas, setValoresSaidas] = useState<ValorModel[]>([]);
  // @ts-ignore
  const [valoresInvestimentos, setValoresInvestimentos] = useState<ValorModel[]>([]);

  const tratarValorTotal = (lista: ValorModel[]) => lista?.length > 0 ? lista.reduce((p, n) => p + n.valor, 0) : 0;
  const valorTotalEntradas = tratarValorTotal(valoresEntradas);
  const valorTotalSaidas = tratarValorTotal(valoresSaidas);
  const valorTotalInvestimentos = tratarValorTotal(valoresInvestimentos);


  const entradaProps: CardValorProps = {
    cabecalhoProps: {
      valorTotal: valorTotalEntradas,
      tipoCard: ETipoValorEnum.ENTRADA,
      novoValor: () => { alert('Teste') }
    },
    detalhesProps: {
      tipoCard: ETipoValorEnum.ENTRADA,
      valores: valoresEntradas
    }
  }

  const saidaProps: CardValorProps = {
    cabecalhoProps: {
      valorTotal: valorTotalSaidas,
      tipoCard: ETipoValorEnum.SAIDA,
      novoValor: () => { alert('Teste') }
    },
    detalhesProps: {
      tipoCard: ETipoValorEnum.SAIDA,
      valores: valoresSaidas
    }
  }

  const investimentoProps: CardValorProps = {
    cabecalhoProps: {
      valorTotal: valorTotalInvestimentos,
      tipoCard: ETipoValorEnum.INVESTIMENTO,
      novoValor: () => { alert('Teste') }
    },
    detalhesProps: {
      tipoCard: ETipoValorEnum.INVESTIMENTO,
      valores: valoresInvestimentos
    }
  }

  return {
    entradaProps,
    saidaProps,
    investimentoProps
  }
}