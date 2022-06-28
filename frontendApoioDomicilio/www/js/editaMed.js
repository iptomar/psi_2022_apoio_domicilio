var queryString = location.search.substring(1);
 
var a = queryString.split("=");

var idMed = a[1]

console.log(queryString)
console.log(idMed)

$("#editForm").ready(function (){
     $.get("http://localhost:8080/api/medicamentos/"+idMed, function(data, status){
        
         $("#nome").val(data.nome) 
         $("#farmaceutica").val(data.farmaceutica) 
         $("#principio").val(data.principio) 
         $("#dosagem").val(data.dosagem) 
         $("#formato").val(data.formato) 
        //  $("#stock").val(data.stock)
       });
  });
 


    $("#editForm").submit(function (event){
       event.preventDefault();
       var formData = $(this).serialize();
        $.ajax({
            url: 'http://localhost:8080/api/medicamentos/'+idMed, 
            type: 'PUT',
             data: formData,
            success: function(result) {
              alert('Os dados do medicamento foram atualizados.');
            }
          });
    });

    function remover(){
      $.ajax({
          url: 'http://localhost:8080/api/medicamentos/'+idMed,
          type: 'DELETE',
          success: function(data) {
            //play with data
          }
        });
        window.location = "listaMed.html";
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

    var farma = document.getElementById('farmaceutica').value.length
    if (farma == 0) {
        document.getElementById('labfarma').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labfarma').style.color = "#000000";
    }

    var princ= document.getElementById('principio').value.length
    if (princ == 0) {
        document.getElementById('labprinc').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labprinc').style.color = "#000000";
    }
    
    var dosa = document.getElementById('dosagem').value.length
    if (dosa == 0) {
        document.getElementById('labdosa').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labdosa').style.color = "#000000";
    }

    var forma = document.getElementById('formato').value.length
    if (forma == 0) {
        document.getElementById('labforma').style.color = "#FF1133";
        verif = "1";
    } else {
        document.getElementById('labforma').style.color = "#000000";
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
  $('#editForm').show();
}