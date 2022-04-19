var app = {
    initialize: function(){
document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},

onDeviceReady: function(){
    $("#index").submit(function (event){
       event.preventDefault();
       $.ajax({
           type: "GET",
           url: "http://localhost:8080/api/utentes/allUtentes",
           data: {
               
            nome: $("#nome").val(),
            dataNascimento: $("#dataNascimento").val(),
            sitUtente: $("#sitUtente").val(),
            contacto: $("#contacto").val(),
            contacEmergencia: $("#contacEmergencia").val(),
           },
           sucess: function( data ){
               alert(data);
           }
       });
    });
    }
};
app.initialize();