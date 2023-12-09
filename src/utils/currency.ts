export const currencyBrl = (value: number, symbol = true) => {
  if (!symbol) {
    return value.toLocaleString('pt-br', {
      minimumFractionDigits: 2,
    });
  }

  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};
