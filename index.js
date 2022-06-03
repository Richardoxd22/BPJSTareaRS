function añadirtexto(){
    var texto =document.getElementById("input")
    var mostrar = document.getElementById("mostrar_texto")
    mostrar.innerHTML += texto.value;
}
window.addEventListener('DOMContentLoaded',function(e){
    var boton=document.getElementById("boton");
    var contentido =document.getElementsByClassName("content-container")[0];

    for(let i=0; i<10 ;i++){
        var element =document.createElement('div');        
        element.innerHTML.inputValue =i;
    }
    boton.addEventListener("click",(e)=>{
        var inputValue= document.getElementById("input").value;
        alert(inputValue);
    })
});

