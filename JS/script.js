var menuIcone = document.querySelector(".hamburguer-img")
var mostraMenu = document.querySelector("#container--mobile")

menuIcone.addEventListener("click", function(){
     console.log("clicou")
     mostraMenu.style.display = (mostraMenu.style.display === 'none') ? 'block' : 'none';
})

