function validPhone(phoneNum) {
  if (/^\d+$/.test(phoneNum) && phoneNum.length === 11) {
    return true;
  } else return false;
}
export default validPhone;
