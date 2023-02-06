function accion1(){
    alert("Boton 1 hola")    
}
function accion2(){
    confirm("Boton 2 !!!!")
}
function accion3(){
    alert("accion del boton 3");
    confirm(" odsao")
}
function accion4(){
    var nombrecompleto=document.getElementById("tx_1").value+" "+
    document.getElementById("tx_2").value+" "+
    document.getElementById("tx_3").value+" "+
    document.getElementById("tx_4").value
    
    alert(nombrecompleto)
    document.getElementById("Out1").innerHTML=nombrecompleto //el 
    //inner lo que hace es poner nombre completo en el out de html porque al finlal queda como texto
}