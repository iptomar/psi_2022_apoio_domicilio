
$("#editForm").ready(function (){
     $.get("http://localhost:8080/api/users/"+idUser, function(data, status){
         $("#foto").append('<img src="'+ data.foto +'" alt="something" />')
         $("#nome").val(data.nome) 
         $("#username").val(data.username) 
         $("#tipoUtilizador").val(data.tipoUtilizador) 
         $("#dataNascimento").val(data.dataNascimento.substring(0,10)) 
         $("#telemovel").val(data.telemovel) 
         $("#email").val(data.email) 
 
         //alert("Data: " + data + "\nStatus: " + status);
       });
  });
 
  var queryString = location.search.substring(1);
 
  var a = queryString.split("=");
  
  var idUser = a[1]
  
  console.log(queryString)
  console.log(idUser)
  





      $("#editForm").submit(function (event){
        event.preventDefault();
        var formData = $(this).serialize();
          $.ajax({
              url: 'http://localhost:8080/api/users/'+idUser,
              type: 'PUT',
              data: formData,
              success: function (result) {
              }
          });
      });
      
    