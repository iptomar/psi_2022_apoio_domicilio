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
           url: "http://localhost:8080/api/medicamentos/addMed",
           data: {
               nome: $("#nome").val(),
               farmaceutica: $("#farmaceutica").val(),
               principio: $("#principio").val(),
               dosagem: $("#dosagem").val(),
               formato: $("#formato").val(),
            //    stock: $("#stock").val()
        },
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
        document.getElementById('nome').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('nome').style.color = "#000000";
    }

    var farma = document.getElementById('farmaceutica').value.length
    if (farma == 0) {
        document.getElementById('farmaceutica').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('farmaceutica').style.color = "#000000";
    }

    var princ= document.getElementById('principio').value.length
    if (princ == 0) {
        document.getElementById('principio').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('principio').style.color = "#000000";
    }
    
    var dosa = document.getElementById('dosagem').value.length
    if (dosa == 0) {
        document.getElementById('dosagem').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('dosagem').style.color = "#000000";
    }

    var forma = document.getElementById('formato').value.length
    if (forma == 0) {
        document.getElementById('formato').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('formato').style.color = "#000000";
    }

    if (verif == 1) {
        $('.DadosIncomp').show();
        return false;
    }

    $('.pop').show();
    
    return true;
}

function volttt() {
    $('.DadosIncomp').hide();
    $('#criaForm').show();
}

app.initialize();