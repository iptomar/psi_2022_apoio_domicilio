
    $("#utentesTable").ready(function (data){

      //$.get( "http://10.0.2.2:8080/api/utentes/allUtentes", function( data ) {
        $.get( "http://localhost:8080/api/utentes/allUtentes", function( data ) {
            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
                            <td>${data[i].nome}</td>
                            <td>${data[i].dataNascimento}</td>
                            <td>${data[i].sitUtente}</td>
                            <td>${data[i].codigoPostal}</td>
                            <td>${data[i].contacto}</td>
                            <td>${data[i].contacEmergencia}</td>
                            <td><a href="/detalheUtente.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;">Detalhe</a></td>
                            <td><a href="/editaUtente.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;">Editar</a></td>
                            <td><a href="" onclick="remover(${data[i].id})">Remover</a></td>
                        </tr>`
                $("#utentesTable tbody").append(row)
              }
          });
       
    })
       
    function remover(idUtente){
        $.ajax({
            url: "http://localhost:8080/api/utentes/"+idUtente,
            type: "DELETE",
            success: function(data) {
              //play with data
            }
          });
    }