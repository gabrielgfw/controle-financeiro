export function formatarMoeda(valor: number) {
  // Verifica se o valor é nulo ou indefinido
  if (valor == null || valor == undefined) {
    return 'R$ 0,00';
  }

  // Converte o valor para formato de moeda com separador de milhares e decimais
  const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return formatoMoeda.format(valor);
}