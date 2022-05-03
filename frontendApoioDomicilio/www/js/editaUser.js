
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
 
  var queryString = location.search.substring(1);
 
  var a = queryString.split("=");
  
  var idUser = a[1]
  
  console.log(queryString)
  console.log(idUser)
  


  var app = {
    initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

onDeviceReady: function(){
    $("form#editForm").submit(function (event){
       event.preventDefault();
       var formData = new FormData(this);
        $.ajax({
            url: 'http://localhost:8080/api/users/'+idUser,
            type: 'PUT',
            data: formData,
            success: function (result) {
                alert("Data: " + data );
            }
        });
    });
    }
};


window.onload= function() {
    nome1 = document.getElementById('nome').value;
    username1 = document.getElementById('username').value;
    tipoUtilizador1 = document.getElementById('tipoUtilizador').value;
    dataNascimento1 = document.getElementById('dataNascimento').value;
    telemovel1 = document.getElementById('telemovel').value;
    email1 = document.getElementById('email').value;
}

var cont = document.querySelector('#cont')
cont.addEventListener('click', function (e) {
    e.preventDefault();

    var nome2 = document.getElementById('nome').value;
    var username2 = document.getElementById('username').value;
    var tipoUtilizador2 = document.getElementById('tipoUtilizador').value;
    var dataNascimento2 = document.getElementById('dataNascimento').value;
    var telemovel2 = document.getElementById('telemovel').value;
    var email2 = document.getElementById('email').value;
               
    var telem1 = document.getElementById('telemovel').value.length
    if(telem1 !=9){
        document.getElementById('labtel').style.color = "#FF1133";
        $('.telErrado').show();
        return;
    }
    
    var telem2 = document.getElementById('telemovel').value.charAt(0);
    if(telem2 != 9 ){
        document.getElementById('labtel').style.color = "#FF1133";
        $('.telErrado').show();
        return;
    }
    
    document.getElementById('labtel').style.color = "#FFFFFF";
    //document.getElementById('Lfoto').innerHTML =document.getElementById('foto').value + "<br />";
    document.getElementById('Lnome').innerHTML = "NOME: " + nome1 + "->" + nome2 + "<br />";
    document.getElementById('LnomeDeUtilizador').innerHTML = "NOME DE UTILIZADOR: " + username1 + "->" + username2 + "<br />";
    document.getElementById('LtipoUtilizador').innerHTML = "TIPO DE UTILIZADOR: " + tipoUtilizador1 + "->" + tipoUtilizador2 + "<br />";
    //rever a data
    document.getElementById('LdataNascimento').innerHTML = "DATA DE NASCIMENTO: " + dataNascimento1 + "->" + dataNascimento2 + "<br />";
    document.getElementById('Ltelemovel').innerHTML = "TELEMOVEL: " + telemovel1 + "->" + telemovel2 + "<br />";
    document.getElementById('Lemail').innerHTML = "EMAIL: " + email1 + "->" + email2 + "<br />";


    $('.pop').show();    
    $('#editForm').hide();

});

var vol = document.querySelector('#volt')
    vol.addEventListener('click', function (e) {
        e.preventDefault();

        $('.pop').hide();
        $('#editForm').show();
});

var volt = document.querySelector('#voltt')
    volt.addEventListener('click', function (e) {
        e.preventDefault();
        $('.telErrado').hide();
        $('#editForm').show();
});

app.initialize();