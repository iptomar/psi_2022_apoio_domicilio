localStorage.setItem("typeUser", 0);

function login(username,password) {
    //alert("username: " + user + "password: " + password);

    $.get("http://localhost:8080/api/users/name/"+username, function(data){

        if(username == data.username && password == data.password){
            if( data.tipoUtilizador == 1){
                localStorage.setItem("typeUser", 1);
                console.log("TypeuserLogin = " + localStorage.getItem("typeUser"))
                window.open('homeAutenticado.html')


            }
            if( data.tipoUtilizador == 2) {
                localStorage.setItem("typeUser", 2);
                console.log("TypeuserLogin = " + localStorage.getItem("typeUser"))
                window.open('homeAutenticado.html')

            }
            if( data.tipoUtilizador != 1 && data.tipoUtilizador != 2) {
                localStorage.setItem("typeUser", 0);
                alert("Tipo de utilizador não reconhecido");
            }

        }
        else{
            alert("Palavra passe ou utilizador está incorreta");
        }
    });
}