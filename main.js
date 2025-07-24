const nogay = document.getElementById("nogay")
function gg(input) {
  nogay.value += input ;
}
function result() {
  nogay.value = eval(nogay.value);
}
function clears(){
  nogay.value ="";
}