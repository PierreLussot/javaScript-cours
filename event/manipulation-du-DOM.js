//Première façon de sélectionner
//Sélection sur notre document le id = "btn" dans le HTML
const btn = document.querySelector("#btn");
//deuxieme facon de selectionné
const img = document.getElementById("img");

let a = document.getElementsByClassName("clickEvent");
//Au bouton, on ajoute un événement au click qui fait apparaître l'image.
//Le paramètre e récupère tous les événements que contient le addEventListener("mousemove / click / etc. ...")
//Ajoute une fonction
//! addEventListener marche comme ceci toujours mètre le paramètre de l'événement.
//! Puis la fonction
btn.addEventListener("click", (e) => {
  img.classList.toggle("show");
  console.log("ca marche !");
});
/************************************************************ */

const mouveEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

mouveEvent.addEventListener("mousemove", (e) => {
  //innerHTML
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;

  mouveEvent.style.left = (e.x / window.innerWidth) * 100 + "%";
  //console.log(e);
});

/**************************************************************** */

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", (e) => {
  let container_para = document.getElementById("container_para");
  let para = document.getElementById("para");

  container_para.classList.toggle("container_para");
  para.classList.toggle("para");
});

/***************************************************************** */

document.getElementById("input").addEventListener("input", (e) => {
  let affichage_nom = document.getElementById("nom");

  affichage_nom.innerHTML = e.target.value;
  console.log(affichage_nom);
});
