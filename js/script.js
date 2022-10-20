
function animation() {
  document.getElementById('iframe').src = "loading.html";
}
function change_address(data) {
  animation();
  document.getElementById('iframe').src = data;
}
