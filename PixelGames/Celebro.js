botao = document.querySelector(".classbutton");
botao.addEventListener("click", function() {
    alert("Warning: Dark mode is still under development, it may not work well.")
    corpo = document.querySelector("body");
    corpo.style.backgroundColor = "black";
    

})
botao2 = document.querySelector(".classbutton2");
botao2.addEventListener("click", function() {
    corpo.style.backgroundColor = "khaki";
})