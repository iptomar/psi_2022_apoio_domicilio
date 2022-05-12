
    $("#medTable").ready(function (data){

        $.get( "http://localhost:8080/api/medicamentos/allMed", function( data ) {
            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
                            <td>${data[i].nome}</td>
                            <td>${data[i].farmaceutica}</td>
                            <td>${data[i].principio}</td>
                            <td>${data[i].dosagem}</td>
                            <td>${data[i].formato}</td>  
                                          
                            <td><a href="/editaMed.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;">Editar</a></td>
                            <td><a href="" onclick="remover(${data[i].id})">Remover</a></td>
                           </tr>`
                $("#medTable tbody").append(row)
              }
          });
       
    })

function remover(idMed){
    $.ajax({
        url: 'http://localhost:8080/api/medicamentos/'+idMed,
        type: 'DELETE',
        success: function(data) {
          //play with data
        }
      });
}
