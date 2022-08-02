export const priceFormatted = (value) => {
  return Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};
