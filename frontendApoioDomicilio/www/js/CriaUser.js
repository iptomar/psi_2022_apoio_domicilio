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


function verificar() {

    //Codigo para ver se ha campos por preencher
    var verif = "0"

    var nomed = document.getElementById('nome').value.length
    if (nomed == 0) {
        document.getElementById('labnome').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labnome').style.color = "#000000";
    }

    var userna = document.getElementById('username').value.length
    if (userna == 0) {
        document.getElementById('labusername').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labusername').style.color = "#000000";
    }

    var passw = document.getElementById('password').value.length
    if (passw == 0) {
        document.getElementById('labpass').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labpass').style.color = "#000000";
    }

    var tipuser = document.getElementById('tipoUtilizador').value
    if (tipuser == "Tipo de utilizador") {
        document.getElementById('tipoUtilizador').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('tipoUtilizador').style.color = "#000000";
    }

    var datan = document.getElementById('dataNascimento').value.length
    if (datan == 0) {
        document.getElementById('labnasc').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labnasc').style.color = "#000000";
    }

    var tele = document.getElementById('telemovel').value.length
    if (tele == 0) {
        document.getElementById('labtel').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labtel').style.color = "#000000";
    }

    var fotoo = document.getElementById('costumFile').files.length
    if (fotoo == 0) {
        document.getElementById('labfoto').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labfoto').style.color = "#000000";
    }

    var mail = document.getElementById('email').value.length
    if (mail == 0) {
        document.getElementById('labmail').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labmail').style.color = "#000000";
    }


    if (verif == 1) {
        $('.DadosIncomp').show();
        return false;
    }


    var telem1 = document.getElementById('telemovel').value.length
    if (telem1 != 9) {
        document.getElementById('labtel').style.color = "#FF1133";
        $('.telErrado').show();
        return false;
    }

    var telem2 = document.getElementById('telemovel').value.charAt(0);
    if (telem2 != 9) {
        document.getElementById('labtel').style.color = "#FF1133";
        $('.telErrado').show();
        return false;
    }
    document.getElementById('labtel').style.color = "#000000";

   
    $('.pop').show();
    
    return true;
}



function voltt() {
    $('.telErrado').hide();
    $('#formulario').show();
}
function volttt() {
    $('.DadosIncomp').hide();
    $('#formulario').show();
}


app.initialize();