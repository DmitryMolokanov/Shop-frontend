function validCard(data) {
  const arrVal = Object.values(data);
  const date = new Date().getFullYear();
  if (arrVal.includes("")) {
    return false;
  } else if (data.cardNumber.length < 19) {
    return false;
  } else if (data.monthYear.length < 5) {
    return false;
  } else if (data.monthYear.slice(3, 5) < String(date).slice(2, 5)) {
    return false;
  } else if (data.cvc.length < 3) {
    return false;
  } else return true;
}

export default validCard;
