
    
 
    
  
 var app = {
     initialize: function(){
     document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
     },
 
 
 onDeviceReady: function(){
     $("form#formulario").submit(function (event){
        event.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            type: "PUT",
            url: "http://localhost:8080/api/users/:id",
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