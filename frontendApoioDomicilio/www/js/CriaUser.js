var app = {
    initialize: function(){
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

onDeviceReady: function(){
    $("#formulario").submit(function (event){
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


var cont = document.querySelector('#cont')
cont.addEventListener('click', function (e) {
    e.preventDefault();

    //Codigo para ver se ha campos por preencher (campo da foto nao incluido)
    var contador = "0"

    var nomed = document.getElementById('nome').value.length
    if(nomed == 0){
        document.getElementById('labnome').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labnome').style.color = "#FFFFFF";
    }

    var userna = document.getElementById('username').value.length
    if(userna == 0){
        document.getElementById('labusername').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labusername').style.color = "#FFFFFF";
    }

    var passw = document.getElementById('password').value.length
    if(passw == 0){
        document.getElementById('labpass').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labpass').style.color = "#FFFFFF";
    }

    var tipuser = document.getElementById('tipoUtilizador').value.length
    if(tipuser == 0){
        document.getElementById('labtipo').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labtipo').style.color = "#FFFFFF";
    }

    var datan = document.getElementById('dataNascimento').value.length
    if(datan == 0){
        document.getElementById('labnasc').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labnasc').style.color = "#FFFFFF";
    }

    var tele = document.getElementById('telemovel').value.length
    if(tele == 0){
        document.getElementById('labtel').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labtel').style.color = "#FFFFFF";
    }

    var mail = document.getElementById('email').value.length
    if(mail == 0){
        document.getElementById('labmail').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labmail').style.color = "#FFFFFF";
    }

    if(contador ==1){
        $('.DadosIncomp').show();
        return;
    }


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

    $('.pop').show();    
    $('#formulario').hide();     
    document.getElementById('Lnome').innerHTML =document.getElementById('nome').value + "<br />";
    document.getElementById('LnomeDeUtilizador').innerHTML =document.getElementById('username').value + "<br />";
    document.getElementById('Lpassword').innerHTML =document.getElementById('password').value + "<br />";
    document.getElementById('LtipoUtilizador').innerHTML =document.getElementById('tipoUtilizador').value + "<br />";
    document.getElementById('LdataNascimento').innerHTML =document.getElementById('dataNascimento').value + "<br />";
    document.getElementById('Lfoto').innerHTML =document.getElementById('foto').value + "<br />";
    document.getElementById('Ltelemovel').innerHTML =document.getElementById('telemovel').value + "<br />";
    document.getElementById('Lemail').innerHTML =document.getElementById('email').value + "<br />";
    
    });
    
    var vol = document.querySelector('#volt')
    vol.addEventListener('click', function (e) {
        e.preventDefault();
        $('.pop').hide();
        $('#formulario').show();
    });

    var volt = document.querySelector('#voltt')
    volt.addEventListener('click', function (e) {
        e.preventDefault();
        $('.telErrado').hide();
        $('#formulario').show();
    });

    var voltt = document.querySelector('#volta')
    voltt.addEventListener('click', function (e) {
        e.preventDefault();
        $('.DadosIncomp').hide();
        $('#formulario').show();
    });


app.initialize();