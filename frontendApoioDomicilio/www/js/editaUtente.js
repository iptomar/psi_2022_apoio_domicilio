let tipoUtilizador = localStorage.getItem("typeUser")
    
if ( tipoUtilizador != 1 && tipoUtilizador != 3){
      window.location = "/permissionDenied.html"
}

$("#editForm").ready(function (){
     $.get("http://localhost:8080/api/utentes/"+idUtente, function(data, status){
        let fotoAux = data.foto.substring(7)
        $("#detFoto").append('<img id="foto" class="detFoto" src="http://localhost:8080/api/files/'+ fotoAux + '" alt="something" />')
        foto = data.foto
         $("#nome").val(data.nome) 
         $("#dataNascimento").val(data.dataNascimento.substring(0,10)) 
         $("#sitUtente").val(data.sitUtente) 
         $("#dAlteraSit").val(data.dAlteraSit.substring(0,10)) 
         $("#estadoCivil").val(data.estadoCivil) 
         $("#nacionalidade").val(data.nacionalidade)
         $("#morada").val(data.morada)
         $("#codigoPostal").val(data.codigoPostal)
         $("#contacto").val(data.contacto)
         $("#contacEmergencia").val(data.contacEmergencia)
         $("#notas").val(data.notas)

       });
  });
 
  var queryString = location.search.substring(1);
 
  var a = queryString.split("=");
 
  var idUtente = a[1]
 
  console.log(queryString)
  console.log(idUtente)
 

  
  $("#editForm").submit(function (event){
    event.preventDefault();
    var formData = $(this).serialize();
      $.ajax({
          url: 'http://localhost:8080/api/utentes/'+idUtente,
          type: 'PUT',
          data: formData,
          success: function (result) {
            alert('Os dados do utente foram atualizados.');
          }
      });
  });
