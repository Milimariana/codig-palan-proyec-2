const tituloH1 = document.querySelector("H1");
tituloH1.innerText =  "Mildred Chacón";



const menuBoton = document.querySelector("#menu-bton");
menuBoton.addEventListener("click", function(){
    document.body.classList.toggle("mobile-menu-active")

})

const swith = document.querySelector(".switch");

swith.addEventListener("click", e=>{
    swith.classList.toggle("active");
    document.body.classList.toggle("active");

})