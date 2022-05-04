var queryString = location.search.substring(1);
 
var a = queryString.split("=");

var idUser = a[1]

console.log(queryString)
console.log(idUser)

$("#editForm").ready(function (){
     $.get("http://localhost:8080/api/users/"+idUser, function(data, status){
        
         $("#nome").val(data.nome) 
         $("#username").val(data.username) 
         $("#tipoUtilizador").val(data.tipoUtilizador) 
         $("#dataNascimento").val(data.dataNascimento.substring(0,10)) 
         $("#telemovel").val(data.telemovel) 
         $("#email").val(data.email) 

       });
  });
 


    $("#editForm").submit(function (event){
       event.preventDefault();
       var formData = $(this).serialize();
        $.ajax({
            url: 'http://localhost:8080/api/users/'+idUser, 
            type: 'PUT',
            data: formData,
            success: function(result) {
              alert('Load was performed.');
            }
          });
    });
   
