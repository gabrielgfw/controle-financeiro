import { ETipoValorEnum } from "../enum/ETipoValorEnum";

export interface ValorModel {
  tipoValor: ETipoValorEnum,
  valor: number,
  descricao: string
}