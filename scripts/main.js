
//Esse codigo foi postado no AwardSpace, porém, não funcionou em nenhum navegador que tenho disponivél,
//funiona apenas no localhost.//

navigator.geolocation.getCurrentPosition(print_geo);

function print_geo(){
    navigator.geolocation.getCurrentPosition(function(position){
      document.getElementById("tela").value = position.coords.latitude
})
}

function atual(){;
  navigator.geolocation.getCurrentPosition(function(position){
   document.getElementById("tela2").value = position.coords.latitude
//Essa parte não funciona, escreve NaN, não sei o motivo, sou muito burra e o zero vem ;_;//
    document.getElementById ("tela3").value = parseFloat("print_geo") - parseFloat("atual") ;
})
}
