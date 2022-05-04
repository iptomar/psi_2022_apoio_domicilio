
function validate(){

    var checkUsername=document.getElementById("username").value;
    var checkPassword=document.getElementById("password").value;
    
    $.get( "http://localhost:8080/api/users/getUserByUsername", function( data ) {
        for (var i = 0; i < data.length; i++) {
            username = data[i].username;
            if (checkUsername == username){
                alert("Login com sucesso");
            }else{
                alert("Login sem sucesso");
            }

        }
    })  

    }
    
