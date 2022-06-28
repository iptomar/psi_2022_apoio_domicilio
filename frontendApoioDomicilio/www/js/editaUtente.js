
$("#editForm").ready(function () {
  $.get("http://localhost:8080/api/utentes/" + idUtente, function (data, status) {
    let fotoAux = data.foto.substring(7)
    //let fotoAux = data.foto.substring(7)
    $("#detFoto").append('<img id="foto" class="detFoto" src="http://localhost:8080/api/files/' + fotoAux + '" alt="something" />')
    foto = data.foto
    $("#nome").val(data.nome)
    $("#dataNascimento").val(data.dataNascimento.substring(0, 10))
    $("#sitUtente").val(data.sitUtente)
    $("#dAlteraSit").val(data.dAlteraSit.substring(0, 10))
    $("#estadoCivil").val(data.estadoCivil)
    $("#nacionalidade").val(data.nacionalidade)
    $("#morada").val(data.morada)
    $("#codigoPostal").val(data.codigoPostal)
    $("#contacto").val(data.contacto)
    $("#contacEmergencia").val(data.contacEmergencia)
    $("#notas").val(data.notas)

  });
});

var queryString = location.search.substring(1);

var a = queryString.split("=");

var idUtente = a[1]

console.log(queryString)
console.log(idUtente)



$("#editForm").submit(function (event) {
  event.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    url: 'http://localhost:8080/api/utentes/' + idUtente,
    type: 'PUT',
    data: formData,
    success: function (result) {
      alert('Os dados do utente foram atualizados.');
    }
  });
});

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
    document.getElementById('labdatalt').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labdatalt').style.color = "#000000";
  }

  var datan = document.getElementById('dataNascimento').value.length
  if (datan == 0) {
    document.getElementById('labdatNasc').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labdatNasc').style.color = "#000000";
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
    document.getElementById('labnaci').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labnaci').style.color = "#000000";
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
    document.getElementById('labcodp').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labcodp').style.color = "#000000";
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
    document.getElementById('labconte').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labconte').style.color = "#000000";
  }

  if (verif == 1) {
    $('.DadosIncomp').show();
    return false;
  }

  var conceme1 = document.getElementById('contacEmergencia').value.length
  if (conceme1 != 9) {
    document.getElementById('labconte').style.color = "#FF1133";
    $('.telErrado').show();
    return false;
  }

  var conceme2 = document.getElementById('contacEmergencia').value.charAt(0);
  if (conceme2 != 9) {
    document.getElementById('labconte').style.color = "#FF1133";
    $('.telErrado').show();
    return false;
  }
  document.getElementById('labconte').style.color = "#000000";

  var codP = document.getElementById('codigoPostal').value
  var pettern = new RegExp('[0-9]{4}[-]{1}[0-9]{3}');
  if (pettern.test(codP) == false) {
    document.getElementById('labcodp').style.color = "#FF1133";
    $('.PostalErrado').show();
    return false;
  } else {
    document.getElementById('labcodp').style.color = "#000000";
  }


  $('.pop').show();

  return true;



};


function voltar1() {
  $('.telErrado').hide();
  $('#formulario').show();
}

function voltar2() {
  $('.DadosIncomp').hide();
  $('#formulario').show();
}

function voltar3() {
  $('.PostalErrado').hide();
  $('#formulario').show();
}
