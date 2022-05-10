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
              alert('Load was performed.');
            }
          });
    });
