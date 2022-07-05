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

//Recherche des classes incorporé dans des variables
const mouveEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

//Événement au mouvement de la souris
mouveEvent.addEventListener("mousemove", (e) => {
  //innerHTML = on incorpore du texte html
  //ici dans la balise où il y a la classe horizontale & vertical
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  //dans la balise avec la class mouseEvent .style lui donne des comportements de css
  //tel que color /border /background .ect
  mouveEvent.style.left = (e.x / window.innerWidth) * 100 + "%";
  mouveEvent.style.background = "blue";

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
//Prends l'id input ajoute un événement à input.
let input = document.getElementById("input");

input.addEventListener("input", (e) => {
  console.log("input marche");
  //prend l'id de nom
  let affichage_nom = document.getElementById("nom");
  //Et affiche le résultat de la valeur de input grace e.target.value
  affichage_nom.innerHTML = e.target.value;
  console.dir(affichage_nom);
});
/****************************************************************** */

/******************************mode ********************************** */

let theme = document.querySelectorAll(".theme");

//console.log(theme);

theme.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme");
    switch (e.target.id) {
      case "dark":
        document.body.classList.add("darkTheme");
        break;
      case "salmon":
        document.body.classList.add("salmonTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      case "white":
        document.body.classList.add("white");
        break;
      default:
        null;
    }
  });
});

let input2 = document.querySelector("#input2");
input2.addEventListener("click", (e) => {
  let c = document.getElementById("c");

  c.innerHTML = e.target.value;
});
