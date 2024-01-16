import { ETipoValorEnum } from "../../shared/enum/ETipoValorEnum";
import { ValorModel } from "../../shared/models/ValorModel";
import { useState } from "react";

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
]


export default function useDisplayValores() {
  const [valoresEntradas, setValoresEntradas] = useState<ValorModel[]>(mockEntradas);
  const [valoresSaidas, setValoresSaidas] = useState<ValorModel[]>([]);
  const [valoresInvestimentos, setValoresInvestimentos] = useState<ValorModel[]>([]);

  const tratarValorTotal = (lista: ValorModel[]) => lista?.length > 0 ? lista.reduce((p, n) => p + n.valor, 0) : 0;
  const valorTotalEntradas = tratarValorTotal(valoresEntradas);
  const valorTotalSaidas = tratarValorTotal(valoresSaidas);
  const valorTotalInvestimentos = tratarValorTotal(valoresInvestimentos);

  const entradaProps = {
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

  return {
    entradaProps,

  }
}