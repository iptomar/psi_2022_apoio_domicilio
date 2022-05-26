
    $("#usersTable").ready(function (data){

         $.get( "http://localhost:8080/api/users/allUsers", function( data ) {
           let fotoAux
            for (var i = 0; i < data.length; i++) {
                fotoAux = data[i].foto.substring(7)
                var row = `<div class="col">
                <div class="card" style="width: 100%;">
                <a href="/detalheUser.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;" class="btn btn-primary stretched-link">
                  <img id="foto" src="http://localhost:8080/api/files/${fotoAux}" class="card-img-top" alt="Hollywood Sign on The Hill"/>
                  </a>
                  <div class="card-body">
                    <h5 class="card-title">${data[i].nome}</h5>
                    <p class="card-text">
                    ${data[i].username}
                    </p>
                    <p class="card-text">
                    ${data[i].email}
                    </p>
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


