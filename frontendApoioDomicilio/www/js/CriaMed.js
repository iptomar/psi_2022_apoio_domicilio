var app = {
    initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

onDeviceReady: function(){
    $("#formulario").submit(function (event){
       event.preventDefault();
       $.ajax({
           type: "POST",
           url: "http://localhost:8080/api/medicamentos/addMed",
           data: {
               nome: $("#nome").val(),
               farmaceutica: $("#farmaceutica").val(),
               principio: $("#principio").val(),
               dosagem: $("#dosagem").val(),
               formato: $("#formato").val(),
        },
           sucess: function( data ){
               alert(data);
           }
       });
    });
    }
};
app.initialize();