function login(username,password) {
    //alert("username: " + user + "password: " + password);

    $.get("http://10.10.192.239:8080/api/users/name/"+username, function(data){

        if(username == data.username && password == data.password){
            if( data.tipoUtilizador == 1){
                window.open('listaUsers.html')
            }
            if( data.tipoUtilizador == 2) {
                window.open('listaUtentes.html')
            }
            if( data.tipoUtilizador != 1 && data.tipoUtilizador != 2) {
                alert("Tipo de utilizador não reconhecido");
            }

        }
        else{
            alert("Palavra passe ou utilizador está incorreta");
        }
    });
}