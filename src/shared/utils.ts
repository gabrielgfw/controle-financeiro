export const formatarMoeda = (valor: number) => {
  if (valor == null || valor == undefined) {
    return 'R$ 0,00';
  }
  const formatoMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formatoMoeda.format(valor);
}

export const converterValorParaMonetario = (value: string): string => {
  const numericValue = value.replace(/\D/g, '');
  const number = parseFloat(numericValue) / 100;
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export const converterMonetarioParaNumber = (valor: string): number => {
  const valorSanitizado = valor.replace('R$', '').trim().replaceAll('.', '').replace(',', '.');
  return Number(parseFloat(valorSanitizado).toFixed(2)); 
}
