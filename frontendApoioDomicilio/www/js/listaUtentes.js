let tipoUtilizador = localStorage.getItem("typeUser")
    
if ( tipoUtilizador != 1 && tipoUtilizador != 2){
      window.location = "/permissionDenied.html"
}

if ( tipoUtilizador != 1){
    document.getElementById("listaUserBtn").style.display = "none";
    document.getElementById("listaMedsBtn").style.display = "none";
}
if (localStorage.getItem("typeUser") == 1){
    document.getElementById("listaUserBtn").style.display = "block";
    document.getElementById("listaMedsBtn").style.display = "block";
}
if (localStorage.getItem("typeUser") != 2){
  document.getElementById("criaUtenteBtn").style.display = "none";
}
if (localStorage.getItem("typeUser") == 2){
  document.getElementById("criaUtenteBtn").style.display = "block";
}


    $("#utentesTable").ready(function (data){

        $.get( "http://localhost:8080/api/utentes/allUtentes", function( data ) {            
              let fotoAux
              for (var i = 0; i < data.length; i++) {
                  fotoAux = data[i].foto.substring(7)
                  var row = `<div class="col">
                  <div class="card" style="width: 100%;">
                  <a href="/detalheUtente.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;" class="btn btn-primary stretched-link" style="background-color:rgb(75, 146, 252);" >
                    <img id="foto" src="http://localhost:8080/api/files/${fotoAux}" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                    </a>
                    <div class="card-body">
                    <label style="font-weight:bold"> Nome: </label>
                      <h5 class="card-title">${data[i].nome}</h5>
                      <label style="font-weight:bold"> Data nascimento: </label>
                      <p class="card-text">
                      ${data[i].dataNascimento.substring(0,10)}
                      </p>
                      <label style="font-weight:bold"> Código Postal: </label>
                      <p class="card-text">
                      ${data[i].codigoPostal}
                      </p>
                      <label style="font-weight:bold"> Contacto: </label>
                      <p class="card-text">
                      ${data[i].contacto}
                      </p>
                    </div>
                  </div>
        
                </div>`
                  $("#utentesTable").append(row)
                }
            }); 
         
      })
              
            
       
