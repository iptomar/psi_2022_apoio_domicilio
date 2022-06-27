localStorage.setItem("typeUser", 0);

var app = {
    initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

onDeviceReady: function(){
    $("#formLogin").submit(function (event){
       event.preventDefault();
       $.ajax({
        type: "POST",
        contentType: 'application/json',
        url: "http://localhost:8080/api/users/loginUser",
        data: {
            username: $("#username").val(),
            password: $("#password").val()

        } ,
         sucess: function( data ){
             localStorage.setItem("typeUser", 1);
             console.log("TypeuserLogin = " + localStorage.getItem("typeUser"))
             window.open('homeAutenticado.html')
             alert(data);
             alert(data);
         },
         error: function( data ){
          alert('error');
      }

    });
    });
    }
};
app.initialize();