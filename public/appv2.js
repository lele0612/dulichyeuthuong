





$(document).ready(function(){

  $path = window.location.pathname.trim();
  $trimmedPath = $path.replace(/^\/+|\/+$/g, '');

  console.log("current path: "+$trimmedPath);


  if($trimmedPath===""){
    $("#hider").hide();
  }

  if($trimmedPath==="account/edit"){
    $("#delete_account_tmp_hide").hide();
  }

});




/*
if($current_path.trim())
var firstName = typeof(data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
*/
