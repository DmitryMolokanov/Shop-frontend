function cleanForm([...arg]) {
  arg.forEach((ref) => {
    ref.current.value = "";
  });
}
export default cleanForm;
