
    $("#detForm").ready(function(){
       $.get("http://localhost:8080/api/users" + idUser, function(data) {
           $("#foto").val(data.foto)
           $("#nome").val(data.nome)
           $("#username").val(data.username)
           $("#tipoUtilizador").val(data.tipoUtilizador)
           $("#dataNascimento").val(data.dataNascimento.substring(0,10))
           $("#telemovel").val(data.telemovel)
           $("#email").val(data.email)
       })
        sucess: function(data ){
        alert(data);
        }
        
        var queryString = location.search.substring(1);
        var a = queryString.split("=");

        var idUser = a[1]

        console.log(queryString)
        console.log(idUser)

       });
    
    
    