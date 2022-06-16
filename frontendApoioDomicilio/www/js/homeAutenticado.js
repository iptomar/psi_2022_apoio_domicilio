let tipoUtilizador = localStorage.getItem("typeUser")

if ( tipoUtilizador != 1 && tipoUtilizador != 2 && tipoUtilizador != 3){
  window.location = "/permissionDenied.html"
}

if ( tipoUtilizador != 1){
    document.getElementById("listaUserBtn").style.display = "none";
  }
if (localStorage.getItem("typeUser") == 1){
    document.getElementById("listaUserBtn").style.display = "block";
}