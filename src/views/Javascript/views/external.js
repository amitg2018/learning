let keyValue = 1000;
function test() {
  keyValue = 2500;
  console.log("tested");
  console.log(keyValue);
}
let ab = "Some Text more !";

export { keyValue, test };
export default ab;
