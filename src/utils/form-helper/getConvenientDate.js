const getConvenientDate = (date) => {
  const newDate = new Date(date);
  const day =
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
  const month =
    newDate.getMonth() + 1 < 10
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const hours =
    newDate.getHours() < 10 ? `0${newDate.getHours()}` : newDate.getHours();
  const minuts =
    newDate.getMinutes() < 10
      ? `0${newDate.getMinutes()}`
      : newDate.getMinutes();
  return `${day}.${month}.${year} at ${hours}:${minuts}`;
};

export default getConvenientDate;
