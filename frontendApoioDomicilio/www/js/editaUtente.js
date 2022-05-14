
$("#editForm").ready(function () {
  $.get("http://localhost:8080/api/utentes/" + idUtente, function (data, status) {
    $("#foto").append('<img src="' + data.foto + '" alt="something" />')
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
    }
  });
});




function verificar() {

  var nome2 = document.getElementById('nome').value;
  var dataNascimento2 = document.getElementById('dataNascimento').value;
  var sitUtente2 = document.getElementById('sitUtente').value;
  var dAlteraSit2 = document.getElementById('dAlteraSit').value;
  var EstCiv2 = document.getElementById('EstCiv').value;
  var nacionalidade2 = document.getElementById('nacionalidade').value;
  var morada2 = document.getElementById('morada').value;
  var codigoPostal2 = document.getElementById('codigoPostal').value;
  var contacto2 = document.getElementById('contacto').value;
  var contacEmergencia2 = document.getElementById('contacEmergencia').value;
  var notas2 = document.getElementById('notas').value;

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
  document.getElementById('labconteme').style.color = "#FFFFFF";

  $('.pop').show();

  return true;

  //$('.pop').show();    
  //$('#editForm').hide();  

  //document.getElementById('Lnome').innerHTML = "NOME: " + nome1 + "->" + nome2 + "<br />";
  //document.getElementById('LdataNascimento').innerHTML ="DATA DE NASCIMENTO: " + dataNascimento1 + "->" + dataNascimento2 + "<br />";
  //document.getElementById('LsitUten').innerHTML ="SITUACAO DO UTENTE: " + sitUtente1 + "->" + sitUtente2 + "<br />";
  //document.getElementById('LdataUt').innerHTML ="DATA DE ALTERACAO DA SITUACAO: " + dAlteraSit1 + "->" + dAlteraSit2 + "<br />";
  //document.getElementById('Lestciv').innerHTML ="ESTADO CIVIL: " + EstCiv1 + "->" + EstCiv2 + "<br />";
  //document.getElementById('Lnacio').innerHTML ="NACIONALIDADE: " + nacionalidade1 + "->" + nacionalidade2 + "<br />";
  //document.getElementById('Lmora').innerHTML ="MORADA: " + morada1 + "->" + morada2 + "<br />";
  //document.getElementById('LcodP').innerHTML ="CODIGO POSTAL: " + codigoPostal1 + "->" + codigoPostal2 + "<br />";
  //document.getElementById('Lcontacto').innerHTML ="CONTACTO: " + contacto1 + "->" + contacto2 + "<br />";
  //document.getElementById('LcontaEmer').innerHTML ="CONTACTO DE EMERGENCIA: " + contacEmergencia1 + "->" + contacEmergencia2 + "<br />";
  //document.getElementById('Lnotas').innerHTML ="NOTAS: " + notas1 + "->" + notas2 + "<br />";

};

//function volt() {
//  $('.pop').hide();
//  $('#editForm').show();
//};

function voltt() {
  $('.telErrado').hide();
  $('#editForm').show();
};
