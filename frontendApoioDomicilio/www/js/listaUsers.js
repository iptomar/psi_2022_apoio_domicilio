
    $("#usersTable").ready(function (data){

        $.get( "http://localhost:8080/api/users/allUsers", function( data ) {
            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
                            <td>${data[i].nome}</td>
                            <td>${data[i].username}</td>
                            <td>${data[i].tipoUtilizador}</td>
                            <td>${data[i].dataNascimento}</td>
                            <td>${data[i].telemovel}</td>
                            <td><a href="/detalheUser.html">Detalhe</a></td>
                            <td><a href="/users/updateUser">Editar</a></td>
                            <td><a href="/users/deleteUser">Remover</a></td>
                           </tr>`
                $("#usersTable tbody").append(row)
              }
          });
       
    })
