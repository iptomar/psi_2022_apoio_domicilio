$("#detForm").ready(function (){
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
 