const convertMoney = ({
  value,
  currency = "id-ID",
  customPrefix = "Rp",
}: {
  value: number;
  currency?: string;
  customPrefix?: string;
}) => {
  const convert = new Intl.NumberFormat(currency).format(value);
  return `${customPrefix} ${convert}`;
};

export default convertMoney;
