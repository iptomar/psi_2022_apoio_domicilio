
$("#detForm").ready(function (data){
    var formData = new FormData(this);
$.ajax({
    type: "GET",
    url: "http://localhost:8080/api/utentes/:id",
    data: { id : id },
    success: function(result) {
    }
});



  });