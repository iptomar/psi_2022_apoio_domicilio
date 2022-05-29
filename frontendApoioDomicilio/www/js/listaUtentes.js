
    $("#utentesTable").ready(function (data){

        $.get( "http://localhost:8080/api/utentes/allUtentes", function( data ) {
            
              let fotoAux
              for (var i = 0; i < data.length; i++) {
                  fotoAux = data[i].foto.substring(7)
                  var row = `<div class="col">
                  <div class="card" style="width: 100%;">
                  <a href="/detalheUtente.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;" class="btn btn-primary stretched-link">
                    <img id="foto" src="http://localhost:8080/api/files/${fotoAux}" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                    </a>
                    <div class="card-body">
                      <h5 class="card-title">${data[i].nome}</h5>
                      <p class="card-text">
                      ${data[i].dataNascimento.substring(0,10)}
                      </p>
                      <p class="card-text">
                      ${data[i].codigoPostal}
                      </p>
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
              
            
       
