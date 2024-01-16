export enum ETipoValorEnum {
  ENTRADA = "ENTRADA",
  SAIDA = "SAIDA",
  INVESTIMENTO = "INVESTIMENTO"
}

export function retornarCoresCard(valor: ETipoValorEnum) {
  switch (valor) {
    case ETipoValorEnum.ENTRADA:
      return { corPrincipal: "#46b4f5", corSecundaria: "#3769968c" }
    case ETipoValorEnum.SAIDA:
      return { corPrincipal: "#f54646", corSecundaria: "#9637378c" }
    case ETipoValorEnum.INVESTIMENTO:
      return { corPrincipal: "#5c5c5c", corSecundaria: "#2f2f2f8c" }
  }
}

export function retornarTituloCard(valor: ETipoValorEnum) {
  switch (valor) {
    case ETipoValorEnum.ENTRADA:
      return "Entradas"
    case ETipoValorEnum.SAIDA:
      return "Saídas"
    case ETipoValorEnum.INVESTIMENTO:
      return "Investimentos"
  }
}
