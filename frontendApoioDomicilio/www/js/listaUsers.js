
    $("#usersTable").ready(function (data){

        $.get( "http://localhost:8080/api/users/allUsers", function( data ) {
            for (var i = 0; i < data.length; i++) {
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