var queryString = location.search.substring(1);
 
var a = queryString.split("=");

var idUser = a[1]

console.log(queryString)
console.log(idUser)

$("#editForm").ready(function (){
    // event.preventDefault();
     //var formData = new FormData(this);
     $.get("http://localhost:8080/api/users/"+idUser, function(data, status){
         $("#foto").append('<img src="'+ data.foto +'" alt="something" />')
         $("#nome").val(data.nome) 
         $("#username").val(data.username) 
         $("#tipoUtilizador").val(data.tipoUtilizador) 
         $("#dataNascimento").val(data.dataNascimento.substring(0,10)) 
         $("#telemovel").val(data.telemovel) 
         $("#email").val(data.email) 
 
         //alert("Data: " + data + "\nStatus: " + status);
       });
  });
 


  var app = {
    initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

onDeviceReady: function(){
    $("form#editForm").submit(function (event){
       event.preventDefault();
       var formData = new FormData(this);
       $.ajax({
           type: "PUT",
           url: "http://localhost:8080/api/users/"+idUser,
           data: formData,
           cache: false,
           processData: false, 
           contentType: false, 
           sucess: function( data ){
               alert(data);
           }
       });
    });
    }
};
app.initialize();