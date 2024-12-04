export enum ETipoValorEnum {
  ENTRADA = "ENTRADA",
  SAIDA = "SAIDA",
  INVESTIMENTO = "INVESTIMENTO"
}

export function retornarCoresCard(valor: ETipoValorEnum) {
  const cores = {
    ENTRADA: { corPrincipal: "#46b4f5", corSecundaria: "#3769968c" },
    SAIDA: { corPrincipal: "#f54646", corSecundaria: "#9637378c" },
    INVESTIMENTO: { corPrincipal: "#5c5c5c", corSecundaria: "#2f2f2f8c" }
  }
  return cores[valor] || cores["INVESTIMENTO"];
}

export function retornarTituloCard(valor: ETipoValorEnum) {
  const titulos = {
    ENTRADA: "Entradas",
    SAIDA: "Saídas",
    INVESTIMENTO: "Investimentos"
  }
  return titulos[valor] || "Não existente";
}
 