var queryString = location.search.substring(1);

var a = queryString.split("=");

var idUser = a[1]

console.log(queryString)
console.log(idUser)

$("#editForm").ready(function () {
  $.get("http://localhost:8080/api/users/" + idUser, function (data, status) {
    let fotoAux = data.foto.substring(7)
    //let fotoAux = data.foto.substring(7)
    $("#detFoto").append('<img id="foto" class="detFoto" src="http://localhost:8080/api/files/' + fotoAux + '" alt="something" />')
    foto = data.foto
    $("#nome").val(data.nome)
    $("#username").val(data.username)
    $("#password").val(data.password)
    $("#tipoUtilizador").val(data.tipoUtilizador)
    $("#dataNascimento").val(data.dataNascimento.substring(0, 10))
    $("#telemovel").val(data.telemovel)
    $("#email").val(data.email)

  });
});



$("#editForm").submit(function (event) {
  event.preventDefault();
  var formData = $(this).serialize();
  $.ajax({
    url: 'http://localhost:8080/api/users/' + idUser,
    type: 'PUT',
    data: formData,
    success: function (result) {
      alert('Os dados do utilizador foram atualizados.');
    }
  });
});

function verificar() {

  var verif = "0"

  var nomed = document.getElementById('nome').value.length
  if (nomed == 0) {
    document.getElementById('labnome').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labnome').style.color = "#FFFFFF";
  }

  var passw = document.getElementById('password').value.length
  if (maill == 0) {
    document.getElementById('labmail').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labmail').style.color = "#FFFFFF";
  }

  var usern = document.getElementById('username').value.length
  if (usern == 0) {
    document.getElementById('labpass').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labpass').style.color = "#FFFFFF";
  }

  var tipuser = document.getElementById('tipoUtilizador').value.length
  if (tipuser == 0) {
    document.getElementById('labTipouser').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labTipouser').style.color = "#FFFFFF";
  }

  var datnasci = document.getElementById('dataNascimento').value.length
  if (datnasci == 0) {
    document.getElementById('labdatNasc').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labdatNasc').style.color = "#FFFFFF";
  }

  var telemo = document.getElementById('telemovel').value.length
  if (telemo == 0) {
    document.getElementById('labtel').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labtel').style.color = "#FFFFFF";
  }

  var maill = document.getElementById('email').value.length
  if (maill == 0) {
    document.getElementById('labmail').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labmail').style.color = "#FFFFFF";
  }

  var fotoo = document.getElementById('costumFile').files.length
  if (fotoo == 0) {
    document.getElementById('labfoto').style.color = "#FF1133";
    verif = "1";
  } else {
    document.getElementById('labfoto').style.color = "#FFFFFF";
  }

  if (verif == 1) {
    $('.DadosIncomp').show();
    return event.preventDefault();
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
  document.getElementById('labtel').style.color = "#FFFFFF";

  $('.pop').show();

  return true;
}

function voltar() {
  $('.telErrado').hide();
  $('#editForm').show();
};

function voltar2() {
  $('.DadosIncomp').hide();
  $('#editForm').show();
}