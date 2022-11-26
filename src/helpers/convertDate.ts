export const convertDate = ({ date }: { date: Date }) => {
  const valueDate = new Date(date.setHours(0, 0, 0, 0)).getTime();
  const current = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
  const temp = current - valueDate;

  const month = new Date(temp).getMonth();
  const day = new Date(temp).getDate() - 1;
  const year = Math.abs(new Date(temp).getUTCFullYear() - 1970);

  let result = day > 0 ? `${day} hari yang lalu` : "Hari ini";
  if (year > 0) {
    result = `${year} tahun yang lalu`;
  } else if (month > 0) {
    result = `${month} bulan yang lalu`;
  }

  return result;
};
