"use strict";
var Index = {

    //Application Constructor
    init: function() {
        this.bindEvents();
    },

    //Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    //Event Handle
    onDeviceReady: function() {


$("#formLogin").submit(function (e){
    e.preventDefault();

     $.ajax({
        type: "POST",
        url: "http://10.0.2.2:8080/api/users/", 
        data: {
            acao: 'LoginWeb',
            username: $("#username").val(),
            password: $("#password").val()
        },            
        async: false,
        dataType: "json", 
        success: function (json) {

            if(json.result == true){
               //redireciona o utilizador para pagina
               //if(username==username && password==password)
               //$("#utilizadores").html(json.dados.nome);
               //else
               //$("#utentes").html(json.dados.nome);

               $.mobile.changePage("#index", {
                    transition : "slidefade"
                });

            }else{
               alert(json.msg);
            }
        },error: function(xhr,e,t){
            console.log(xhr.responseText);                
        }
    });
  });
}
};