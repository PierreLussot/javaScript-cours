const container = document.getElementById("container");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  getCitation();
});

const getCitation = () => {
  fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log(data);

       p1.innerHTML = "autheur : " + data[0].author;
      p2.innerHTML = "citation : " + data[0].quote;
      

      /*  p1.innerHTML = "autheur : " + data.author;
      p2.innerHTML = "citation : " + data.content;
      p3.innerHTML = "aparrition : " + data.dateAdded; */

      /*  p1.innerHTML = "autheur : " + data.personnage;
    p2.innerHTML = "citation : " + data.citation;
    p3.innerHTML = "aparrition : " + data.saison; */
    });

  fetch("https://picsum.photos/400/400").then((res) => {
    container.style.backgroundImage = "url( " + res.url + " )";
  });
};

getCitation();

//Api citation kaamelott      https://kaamelott.chaudie.re/api/random
//Api citation quotable   https://api.quotable.io/random
//Api citation anime  https://animechan.vercel.app/api/random
//Api citation breaking-bad     https://breaking-bad-quotes.herokuapp.com/v1/quotes
