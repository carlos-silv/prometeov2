var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    offset:150
});
AOS.init();
(function(){

    $(function(){
        $("#emblemas").on("click",function(){
            $("#ventana-modal").modal();
        });


    });

}());

function usuafunchion(){
    var figura= document.getElementById("logim");
    figura.isDefaultNamespace="";
    figura.classList.toggle("usua");
    var imprimir= document.getElementById("logim");
    
  }