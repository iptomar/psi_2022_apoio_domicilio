let tipoUtilizador = localStorage.getItem("typeUser")
    
if ( tipoUtilizador != 1){
      window.location = "/permissionDenied.html"
}

var app = {
    initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

onDeviceReady: function(){
    $("#criaForm").submit(function (event){
       event.preventDefault();
       var formData = new FormData(this);
       $.ajax({
           type: "POST",
           url: "http://localhost:8080/api/users/addUser",
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