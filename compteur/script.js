let paragraphe = document.getElementById("paragraphe");
let h2 = document.getElementById("h2");

let submit = document.getElementById("submit");

let date = document.getElementById("date");



submit.addEventListener( 'click',(e) => {

function downTime() {

  let now = new Date().getTime();
  let daysChoice = new Date(date.value).getTime();
  let fr = new Date(daysChoice).toLocaleDateString("fr-FR");
  let durationDays = daysChoice - now;
  let days = Math.floor(durationDays / (1000 * 60 * 60 * 24));
  let heure = Math.floor(
    (durationDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minute = Math.floor((durationDays % (1000 * 60 * 60)) / (1000 * 60));
  let seconde = Math.floor((durationDays % (1000 * 60)) / 1000);
  h2.innerHTML = `a la date du <br> ${fr} <br> il y a`;
  paragraphe.innerHTML = `
  ${days}j ${heure}h ${minute}m ${seconde}s`;

  console.log(fr);
}

const controltTime = setInterval(() => {
  downTime();
}, 1000);

})


