

    
        $("#editForm").ready(function (data){
           data.preventDefault();
           var formData = new FormData(this);
           $.ajax({
               type: "GET",
               url: "http://localhost:8080/api/utentes/oneUtente",
               data: formData,
               cache: false,
               processData: false, 
               contentType: false, 
               sucess: function( data ){
                   alert(data);
               }
           });
        });
   
 






var app = {
    initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


onDeviceReady: function(){
    $("form#formulario").submit(function (event){
       event.preventDefault();
       var formData = new FormData(this);
       $.ajax({
           type: "POST",
           url: "http://localhost:8080/api/utentes/addUtente",
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