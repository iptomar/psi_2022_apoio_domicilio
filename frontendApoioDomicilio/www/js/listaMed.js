
    $("#medTable").ready(function (data){

        $.get( "http://localhost:8080/api/medicamentos/allMed", function( data ) {
            for (var i = 0; i < data.length; i++) {
              var row = `<div class="col">
                  <div class="card" style="width: 100%;">
                  <a href="/editaMed.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;" class="btn btn-primary stretched-link"style="background-color:rgb(75, 146, 252);" ></a>
                    <div class="card-body">
                      <label style="font-weight:bold"> Nome: </label>
                      <h5 class="card-title">${data[i].nome}</h5>
                      <label style="font-weight:bold"> Farmacêutica: </label>
                      <p class="card-text">
                      ${data[i].farmaceutica}
                      </p>
                      <label style="font-weight:bold"> Principio activo: </label>
                      <p class="card-text">
                      ${data[i].principio}
                      </p>
                      <label style="font-weight:bold"> Dosagem: </label>
                      <p class="card-text">
                      ${data[i].dosagem}
                      </p>
                      <label style="font-weight:bold"> Formato: </label>
                      <p class="card-text">
                      ${data[i].formato}
                      </p>

                    </div>
                  </div>       
              </div>`
              $("#medTable").append(row)             
            }
        });      
    })

    $("#editarMedRef").on('click', function() {
      window.location = "/editaMed.html?id="+idMed;
    });

