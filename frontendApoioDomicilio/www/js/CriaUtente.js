var app = {
    initialize: function(){
document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},

onDeviceReady: function(){
    $("#formulario").submit(function (event){
       event.preventDefault();
       $.ajax({
           type: "POST",
           url: "http://localhost:8080/api/utentes/addUtente",
           data: {
               
               nome: $("#nome").val(),
               dataNascimento: $("#dataNascimento").val(),
               sitUtente: $("#sitUtente").val(),
               dAlteraSit: $("#dAlteraSit").val(),
               estadoCivil: $("#estadoCivil").val(),
               nacionalidade: $("#nacionalidade").val(),
               morada: $("#morada").val(),
               codigoPostal: $("#codigoPostal").val(),
               contacto: $("#contacto").val(),
               contacEmergencia: $("#contacEmergencia").val(),
               foto: $("#foto").val(),
               notas: $("#notas").val(),

           },
           sucess: function( data ){
               alert(data);
           }
       });
    });
    }
};
app.initialize();