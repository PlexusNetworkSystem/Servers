function animation() {
  document.getElementById('iframe').src = "loading.html";
}
function change_address(data) {
  setTimeout(animation, 3000);
  setTimeout();
  document.getElementById('iframe').src = data;
}
