window.getConfirmation = function(){
    var retVal = confirm("Are you sure you want to delete ?");
    if( retVal == true ){
        alert("User wants to delete!");
        return true;
    }
    else{
        alert ("User does not want to delete!");
        return false;
    }
    }
