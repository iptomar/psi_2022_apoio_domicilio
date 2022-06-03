
    $("#usersTable").ready(function (data){

        $.get( "http://localhost:8080/api/users/allUsers", function( data ) {
            for (var i = 0; i < data.length; i++) {
<<<<<<< Updated upstream
                var row = `<tr>
                            <td>${data[i].nome}</td>
                            <td>${data[i].username}</td>
                            <td>${data[i].tipoUtilizador}</td>
                            <td>${data[i].dataNascimento}</td>
                            <td>${data[i].telemovel}</td>
                            <td><a href="/detalheUser.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;">Detalhe</a></td>
                            <td><a href="/editaUser.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;">Editar</a></td>
                            <td><a href="" onclick="remover(${data[i].id})">Remover</a></td>
                           </tr>`
                $("#usersTable tbody").append(row)
=======
                fotoAux = data[i].foto
                //fotoAux = data[i].foto.substring(7)
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
                    ${data[i].tipoUtilizador}
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
>>>>>>> Stashed changes
              }
          });
       
    })

function remover(idUser){
    $.ajax({
        url: "http://localhost:8080/api/users/"+idUser,
        type: "DELETE",
        success: function(data) {
          //play with data
        }
      });
}