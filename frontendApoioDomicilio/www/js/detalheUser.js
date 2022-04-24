
    $("form#detForm").ready(function (data){
       var formData = new FormData(this);
       $.ajax({
           type: "GET",
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
    
    