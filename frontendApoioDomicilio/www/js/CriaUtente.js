var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function () {
        $("#criaForm").submit(function (event) {
            event.preventDefault();
            var formData = new FormData(this);
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/api/utentes/addUtente",
                data: formData,
                cache: false,
                processData: false,
                contentType: false,
                sucess: function (data) {
                    //    alert(data);
                    alert('O utente foi adicionado ao sistema com sucesso.');
                }
            });
        });
    }
};


window.onload = function () {
    document.querySelector('#dAlteraSit').value = (new Date()).toISOString().substr(0, 10);
}


function verificar() {


    //Codigo para ver se ha campos por preencher (campo da foto nao incluido)
    var verif = "0"

    var nomed = document.getElementById('nome').value.length
    if (nomed == 0) {
        document.getElementById('labnome').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labnome').style.color = "#000000";
    }

    var datsit = document.getElementById('dAlteraSit').value.length
    if (datsit == 0) {
        document.getElementById('labdsit').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labdsit').style.color = "#000000";
    }

    var datan = document.getElementById('dataNascimento').value.length
    if (datan == 0) {
        document.getElementById('labnasc').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labnasc').style.color = "#000000";
    }


    var sitUt = document.getElementById('sitUtente').value
    if (sitUt == "Situação do utente") {
        document.getElementById('sitUtente').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('sitUtente').style.color = "#000000";
    }

    var estaciv = document.getElementById('estadoCivil').value
    if (estaciv == "Estado Civil") {
        document.getElementById('estadoCivil').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('estadoCivil').style.color = "#000000";
    }

    var nacio = document.getElementById('nacionalidade').value.length
    if (nacio == 0) {
        document.getElementById('labnacio').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labnacio').style.color = "#000000";
    }

    var fotooo = document.getElementById('costumFile').files.length
    if (fotooo == 0) {
        document.getElementById('labfoto').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labfoto').style.color = "#000000";
    }

    var morad = document.getElementById('morada').value.length
    if (morad == 0) {
        document.getElementById('labmora').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labmora').style.color = "#000000";
    }

    var codP = document.getElementById('codigoPostal').value.length
    if (codP == 0) {
        document.getElementById('labcod').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labcod').style.color = "#000000";
    }

    var contc = document.getElementById('contacto').value.length
    if (contc == 0) {
        document.getElementById('labcont').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labcont').style.color = "#000000";
    }

    var contc = document.getElementById('contacEmergencia').value.length
    if (contc == 0) {
        document.getElementById('labconteme').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labconteme').style.color = "#000000";
    }

    if (verif == 1) {
        $('.DadosIncomp').show();
        return false;
    }

    var conta1 = document.getElementById('contacto').value.length
    if (conta1 != 9) {
        document.getElementById('labcont').style.color = "#FF1133";
        $('.telErrado').show();
        return false;
    }

    var conta2 = document.getElementById('contacto').value.charAt(0);
    if (conta2 != 9) {
        document.getElementById('labcont').style.color = "#FF1133";
        $('.telErrado').show();
        return false;
    }
    document.getElementById('labcont').style.color = "#000000";

    var conceme1 = document.getElementById('contacEmergencia').value.length
    if (conceme1 != 9) {
        document.getElementById('labconteme').style.color = "#FF1133";
        $('.telErrado').show();
        return false;
    }

    var conceme2 = document.getElementById('contacEmergencia').value.charAt(0);
    if (conceme2 != 9) {
        document.getElementById('labconteme').style.color = "#FF1133";
        $('.telErrado').show();
        return false;
    }
    document.getElementById('labconteme').style.color = "#000000";

    var codP = document.getElementById('codigoPostal').value
    var pettern = new RegExp('[0-9]{4}[-]{1}[0-9]{3}');
    if (pettern.test(codP) == false) {
        document.getElementById('labcod').style.color = "#FF1133";
        $('.PostalErrado').show();
        return false;
    } else {
        document.getElementById('labcod').style.color = "#000000";
    }


    $('.pop').show();

    return true;



};


function voltt() {
    $('.telErrado').hide();
    $('#formulario').show();
}

function volttt() {
    $('.DadosIncomp').hide();
    $('#formulario').show();
}

function volte() {
    $('.PostalErrado').hide();
    $('#formulario').show();
}

app.initialize();
