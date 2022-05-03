
$("#editForm").ready(function (){
    // event.preventDefault();
     //var formData = new FormData(this);
     $.get("http://localhost:8080/api/utentes/"+idUtente, function(data, status){
         $("#foto").append('<img src="'+ data.foto +'" alt="something" />')
         $("#nome").val(data.nome) 
         $("#dataNascimento").val(data.dataNascimento.substring(0,10)) 
         $("#sitUtente").val(data.sitUtente) 
         $("#dAlteraSit").val(data.dAlteraSit) 
         $("#estadoCivil").val(data.estadoCivil) 
         $("#nacionalidade").val(data.nacionalidade)
         $("#morada").val(data.morada)
      
         //alert("Data: " + data + "\nStatus: " + status);
       });
  });
 
  var queryString = location.search.substring(1);
 
  var a = queryString.split("=");
 
  var idUtente = a[1]
 
  console.log(queryString)
  console.log(idUtente)

window.onload= function() {
    nome1 = document.getElementById('nome').value;
    dataNascimento1 = document.getElementById('dataNascimento').value;
    sitUtente1 = document.getElementById('sitUtente').value;
    dAlteraSit1 = document.getElementById('dAlteraSit').value;
    EstCiv1 = document.getElementById('EstCiv').value;
    nacionalidade1 = document.getElementById('nacionalidade').value;
    morada1 = document.getElementById('morada').value;
    codigoPostal1 = document.getElementById('codigoPostal').value;
    contacto1 = document.getElementById('contacto').value;
    contacEmergencia1 = document.getElementById('contactoEmergencia').value;
    notas1 = document.getElementById('notas').value;
}


var cont = document.querySelector('#cont')
  cont.addEventListener('click', function (e) {
  e.preventDefault();

  var nome2 = document.getElementById('nome').value;
  var dataNascimento2 = document.getElementById('dataNascimento').value;
  var sitUtente2 = document.getElementById('sitUtente').value;
  var dAlteraSit2 = document.getElementById('dAlteraSit').value;
  var EstCiv2 = document.getElementById('EstCiv').value;
  var nacionalidade2 = document.getElementById('nacionalidade').value;
  var morada2 = document.getElementById('morada').value;
  var codigoPostal2 = document.getElementById('codigoPostal').value;
  var contacto2 = document.getElementById('contacto').value;
  var contacEmergencia2 = document.getElementById('contactoEmergencia').value;
  var notas2 = document.getElementById('notas').value;

  var conceme1 = document.getElementById('contactoEmergencia').value.length
  if(conceme1 !=9){
      document.getElementById('labconteme').style.color = "#FF1133";
      $('.telErrado').show();
      return;
  }
    
  var conceme2 = document.getElementById('contactoEmergencia').value.charAt(0);
  if(conceme2 != 9 ){
      document.getElementById('labconteme').style.color = "#FF1133";
      $('.telErrado').show();
      return;
  }
  document.getElementById('labconteme').style.color = "#FFFFFF";

  $('.pop').show();    
  $('#editForm').hide();  

  document.getElementById('Lnome').innerHTML = "NOME: " + nome1 + "->" + nome2 + "<br />";
  document.getElementById('LdataNascimento').innerHTML ="DATA DE NASCIMENTO: " + dataNascimento1 + "->" + dataNascimento2 + "<br />";
  document.getElementById('LsitUten').innerHTML ="SITUACAO DO UTENTE: " + sitUtente1 + "->" + sitUtente2 + "<br />";
  document.getElementById('LdataUt').innerHTML ="DATA DE ALTERACAO DA SITUACAO: " + dAlteraSit1 + "->" + dAlteraSit2 + "<br />";
  document.getElementById('Lestciv').innerHTML ="ESTADO CIVIL: " + EstCiv1 + "->" + EstCiv2 + "<br />";
  document.getElementById('Lnacio').innerHTML ="NACIONALIDADE: " + nacionalidade1 + "->" + nacionalidade2 + "<br />";
  document.getElementById('Lmora').innerHTML ="MORADA: " + morada1 + "->" + morada2 + "<br />";
  document.getElementById('LcodP').innerHTML ="CODIGO POSTAL: " + codigoPostal1 + "->" + codigoPostal2 + "<br />";
  document.getElementById('Lcontacto').innerHTML ="CONTACTO: " + contacto1 + "->" + contacto2 + "<br />";
  document.getElementById('LcontaEmer').innerHTML ="CONTACTO DE EMERGENCIA: " + contacEmergencia1 + "->" + contacEmergencia2 + "<br />";
  document.getElementById('Lnotas').innerHTML ="NOTAS: " + notas1 + "->" + notas2 + "<br />";
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

