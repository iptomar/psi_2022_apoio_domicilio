

function login(user,password) {
    //alert("username: " + user + "password: " + password);

    $.get("http://localhost:8080/api/users/"+username, function(data){
        //for (var i = 0; i < data.length; i++) {
        if(user == $(data.username) && password == $(data.password)){
           // if( $(data[i].tipoUtilizador) == 1){
                window.open('listaUsers.html')
            }
            else {
                window.open('listaUtentes.html')
            }

        })
        //}
    }


 
