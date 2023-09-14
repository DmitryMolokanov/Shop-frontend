function validationForm(obj) {
  const arrVal = Object.values(obj);
  if (arrVal.includes("")) {
    return false;
  } else return true;
}
export default validationForm;
