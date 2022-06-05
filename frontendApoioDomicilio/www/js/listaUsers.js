
    $("#usersTable").ready(function (data){

         $.get( "http://localhost:8080/api/users/allUsers", function( data ) {
           let fotoAux
            for (var i = 0; i < data.length; i++) {
                fotoAux = data[i].foto.substring(7)
                var row = `<div class="col">
                <div class="card" style="width: 100%;">
                <a href="/detalheUser.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;" class="btn btn-primary stretched-link" style="background-color:rgb(75, 146, 252);">
                  <img id="foto" src="http://localhost:8080/api/files/${fotoAux}" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                  </a>
                  <div class="card-body">
                    <label style="font-weight:bold"> Nome: </label>
                    <h5 class="card-title">${data[i].nome}</h5>
                    <label style="font-weight:bold"> Username: </label>
                    <p class="card-text">
                    ${data[i].username}
                    </p>
                    <label style="font-weight:bold"> Tipo de utilizador: </label>
                    <p class="card-text">
                    ${data[i].tipoUtilizador}
                    </p>
                    <label style="font-weight:bold"> Email: </label>
                    <p class="card-text">
                    ${data[i].email}
                    </p>
                    <label style="font-weight:bold"> Contacto: </label>
                    <p class="card-text">
                    ${data[i].telemovel}
                    </p>
                  </div>
                </div>
      
              </div>`
                $("#usersTable").append(row)
              }
          }); 
       
    })


    


