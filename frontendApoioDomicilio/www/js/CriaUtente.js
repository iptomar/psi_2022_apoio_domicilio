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

window.onload= function() {
    document.querySelector('#dAlteraSit').value=(new Date()).toISOString().substr(0,10);
}

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

    var datan = document.getElementById('dataNascimento').value.length
    if(datan == 0){
        document.getElementById('labnasc').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labnasc').style.color = "#FFFFFF";
    }

    var estaciv = document.getElementById('EstCiv').value
    if(estaciv == "Por preencher"){
        document.getElementById('labestciv').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labestciv').style.color = "#FFFFFF";
    }

    var nacio = document.getElementById('nacionalidade').value.length
    if(nacio == 0){
        document.getElementById('labnacio').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labnacio').style.color = "#FFFFFF";
    }

    var morad = document.getElementById('morada').value.length
    if(morad == 0){
        document.getElementById('labmora').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labmora').style.color = "#FFFFFF";
    }

    var codP = document.getElementById('codigoPostal').value.length
    if(codP == 0){
        document.getElementById('labcod').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labcod').style.color = "#FFFFFF";
    }

    var contc = document.getElementById('contacto').value.length
    if(contc == 0){
        document.getElementById('labcont').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labcont').style.color = "#FFFFFF";
    }

    var contc = document.getElementById('contacEmergencia').value.length
    if(contc == 0){
        document.getElementById('labconteme').style.color = "#FF1133";
        contador ="1";
    }else{
        document.getElementById('labconteme').style.color = "#FFFFFF";
    }

    if(contador ==1){
        $('.DadosIncomp').show();
        return;
    }

    var conceme1 = document.getElementById('contacEmergencia').value.length
    if(conceme1 !=9){
        document.getElementById('labconteme').style.color = "#FF1133";
        $('.telErrado').show();
        return;
    }
    
    var conceme2 = document.getElementById('contacEmergencia').value.charAt(0);
    if(conceme2 != 9 ){
        document.getElementById('labconteme').style.color = "#FF1133";
        $('.telErrado').show();
        return;
    }
    document.getElementById('labconteme').style.color = "#FFFFFF";


    $('.pop').show();    
    $('#formulario').hide();     
    document.getElementById('Lnome').innerHTML =document.getElementById('nome').value + "<br />";
    document.getElementById('LdataNascimento').innerHTML =document.getElementById('dataNascimento').value + "<br />";
    document.getElementById('LsitUten').innerHTML =document.getElementById('sitUtente').value + "<br />";
    document.getElementById('LdataUt').innerHTML =document.getElementById('dAlteraSit').value + "<br />";
    document.getElementById('Lestciv').innerHTML =document.getElementById('EstCiv').value + "<br />";
    document.getElementById('Lnacio').innerHTML =document.getElementById('nacionalidade').value + "<br />";
    document.getElementById('Lmora').innerHTML =document.getElementById('morada').value + "<br />";
    document.getElementById('LcodP').innerHTML =document.getElementById('codigoPostal').value + "<br />";
    document.getElementById('Lcontacto').innerHTML =document.getElementById('contacto').value + "<br />";
    document.getElementById('LcontaEmer').innerHTML =document.getElementById('contacEmergencia').value + "<br />";
    document.getElementById('Lfoto').innerHTML =document.getElementById('foto').value + "<br />";
    document.getElementById('Lnotas').innerHTML =document.getElementById('notas').value + "<br />";
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
