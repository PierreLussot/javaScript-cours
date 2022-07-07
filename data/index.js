// On cree un tableau
const ville = ["Paris", "Lyon", "Montreal", "Bordeaux"];
// pour afficher Montréal ont, mais le nom de la variable et [] et le numéro de l'élément (index)
// qui commence toujours par 0 puis 1 et 3 etc.
console.log(ville[2]);
// On peut aussi une fois dans un élément continuée à se balader dans cet élément en question.
// Là, on veut récupère la lettre e de Bordeaux dans le tableau ville Bordeaux
// et l'élément n°3 et dans Bordeaux e et l'élément n°4
console.log(ville[3][4]);
// Exemple à parcourir un mot avec une boucle
// i= 0 i commence a 0
// i < ville[3].length i et plu petit que la longueur du mot
// i++ i sincèrement de +1 a chaque tour de boucle du coup 0 passe 7 fois dans le mot car sa longeur et de
// 7 lettre 0.1.2.3.4.5.6.7 et du coup renvoi chaque lettre qui décortique mot a mot Bordeaux
// 0:B 1:o 2:r 3:d 4:e 5:a 6:u 7:x
for (let i = 0; i < ville[3].length; i++) {
  console.log(ville[3][i]);
}

const ville1 = ["Paris", 33, ["Montreal", "Bordeaux"]];

//Pour parcourir un tableau, même méthode que pour décortiquer le mot Bordeaux
//let i = 0; i < ville1.length  ; i++
// i= 0 / i commence à 0
// i < ville1.length i et plu petit que la longueur du tableau
// i++ i sincèrement de +1 a chaque tour de boucle
// on log ville1[i] car i va faire  3 fois le tour de tableau au vue de sa longueur
//du coup cela don Paris / 33/['Montreal', " Bordeaux "] car 0 a pour valrur Paris /1 a pour valeur 33 / 2 a pour valeur ['Montreal', "Bordeaux "]
for (let i = 0; i < ville1.length; i++) {
  console.log(ville1[i]);
}
/**************************************** */
const input = document.getElementById("input");
const video = document.getElementById("video");

let link = "";


input.addEventListener("input", (e) => {
    console.log(link);
  changeLink(e.target.value);
   
  if (link) {
    video.innerHTML = `
  <iframe
        width="300"
        height="300"
        src="${link}"
        title="[Tuto Javascript #0] Débuter Javascript de zéro, apprendre les bases"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  }
});
const changeLink = function (linkToChange) {
  let enbed = linkToChange.replace("watch?v=", "embed/");
  link = enbed;
};


//https://www.youtube.com/embed/QB1DTl7HFnc
//https://www.youtube.com/watch?v=gpqoZQ8GNK8
//https://www.youtube.com/watch?v=PnJtO7_B8EI