var tombol = document.getElementById("tombol");
tombol.addEventListener("click",ubahH1);
function ubahH1(){
  var h1dok = document.getElementById("idH1");
  //console.log(h1dok.innerHTML);
  console.log(h1dok);
  h1dok.innerHTML = "Belajar DOM";
}