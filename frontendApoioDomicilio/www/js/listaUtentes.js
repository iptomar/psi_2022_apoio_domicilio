
    $("#utentesTable").ready(function (data){

        $.get( "http://localhost:8080/api/utentes/allUtentes", function( data ) {
            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
                <td>${data[i].nome}</td>
                            <td>${data[i].nome}</td>
                            <td>${data[i].dataNascimento}</td>
                            <td>${data[i].sitUtente}</td>
                            <td>${data[i].codigoPostal}</td>
                            <td>${data[i].contacto}</td>
                            <td>${data[i].contacEmergencia}</td>
                            <td><button type="button" class="btn btn-warning" onclick="getId(this)"><a href="/detalheUtente.html">Detalhes</a></td>
                            <td><button type="button" class="btn btn-warning" onclick="getId(this)"><a href="/editarUtente.html">Editar</button></td>
						    <td><g:link controller="utentesController" action="delete">
								<button type="button" class="btn btn-danger" onclick="getConfirmation(this);">Remover</button>
                                </g:link>
                            </td>
                        </tr>`
                $("#utentesTable tbody").append(row)
              }
          });
       
    })
           