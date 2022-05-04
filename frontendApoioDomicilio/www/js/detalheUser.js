$("form#detForm").ready(function (){
    $.get("http://localhost:8080/api/users/"+idUser, function(data, status){
        $("#nome").val(data.nome) 
        $("#username").val(data.username) 
        $("#password").val(data.password) 
        $("#tipoUtilizador").val(data.tipoUtilizador) 
        $("#dataNascimento").val(data.dataNascimento.substring(0,10)) 
        //$("#foto").append('<img src="'+ data.foto +'" alt="something" />')
        $("#telemovel").val(data.telemovel) 
        $("#email").val(data.email) 

      });
 });

 var queryString = location.search.substring(1);

 var a = queryString.split("=");

 var idUser = a[1]

 console.log(queryString)
 console.log(idUser)