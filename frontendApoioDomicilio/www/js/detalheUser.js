var app = {
    initialize: function(){
document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},

onDeviceReady: function(){
    $("#formulario").submit(function (event){
       event.preventDefault();
       $.ajax({
           type: "GET",
           url: "http://localhost:8080/api/users/oneUser",
           data: {
               
               nome: $("#nome").val(),
               username: $("#username").val(),
               password: $("#password").val(),
               tipoUtilizador: $("#tipoUtilizador").val(),
               dataNascimento: $("#dataNascimento").val(),
               foto: $("#foto").val(),
               telemovel: $("#telemovel").val(),
               email: $("#email").val()

           },
           sucess: function( data ){
               alert(data);
           }
       });
    });
    }
};
app.initialize();