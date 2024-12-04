import { ETipoValorEnum } from "../../shared/enum/ETipoValorEnum";
import { ValorModel } from "../../shared/models/ValorModel";
import { useState } from "react";
import { CardValorProps } from "./card-valor";

export default function useDisplayValores() {
  const [valoresEntradas, setValoresEntradas] = useState<ValorModel[]>([]);
  const [valoresSaidas, setValoresSaidas] = useState<ValorModel[]>([]);
  const [valoresInvestimentos, setValoresInvestimentos] = useState<ValorModel[]>([]);

  const tratarValorTotal = (lista: ValorModel[]) => lista?.length > 0 ? lista.reduce((p, n) => p + n.valor, 0) : 0;
  const valorTotalEntradas = tratarValorTotal(valoresEntradas);
  const valorTotalSaidas = tratarValorTotal(valoresSaidas);
  const valorTotalInvestimentos = tratarValorTotal(valoresInvestimentos);

  const inserirNovoValor = (novoValorProps: ValorModel): void => {
    const tiposValores = {
      ENTRADA: () => setValoresEntradas([...valoresEntradas, novoValorProps]),
      SAIDA: () => setValoresSaidas([...valoresSaidas, novoValorProps]),
      INVESTIMENTO: () => setValoresInvestimentos([...valoresInvestimentos, novoValorProps])
    };
    tiposValores[novoValorProps.tipoValor]();
  };

  const entradaProps: CardValorProps = {
    cabecalhoProps: {
      valorTotal: valorTotalEntradas,
      tipoCard: ETipoValorEnum.ENTRADA,
      inserirNovoValor: inserirNovoValor
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
      inserirNovoValor
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
      inserirNovoValor
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