
    $("#medTable").ready(function (data){

        $.get( "http://localhost:8080/api/medicamentos/allMed", function( data ) {
            for (var i = 0; i < data.length; i++) {
              var row = `<div class="col">
                  <div class="card" style="width: 100%;">
                  <a href="/editaMed.html" onclick="location.href=this.href+'?id='+${data[i].id};return false;" class="btn btn-primary stretched-link"></a>
                    <div class="card-body">
                      <h5 class="card-title">${data[i].nome}</h5>
                      <p class="card-text">
                      ${data[i].farmaceutica}
                      </p>
                      <p class="card-text">
                      ${data[i].principio}
                      </p>
                      <p class="card-text">
                      ${data[i].dosagem}
                      </p>
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

