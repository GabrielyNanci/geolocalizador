
//navigator.geolocation.getCurrentPosition(print_geo);

function print_geo(){
    navigator.geolocation.getCurrentPosition(function(position){
      document.getElementById("tela").value = position.coords.latitude
})
}

function atual(){;
  navigator.geolocation.getCurrentPosition(function(position){
   document.getElementById("tela2").value = position.coords.latitude
    document.getElementById ("tela3").value = parseFloat("print_geo") - parseFloat("atual") ;
})
}
