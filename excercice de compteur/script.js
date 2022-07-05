let plus = document.getElementById("plus");
let moins = document.getElementById("moins");

let input = document.getElementById("chiffre");

console.dir(input);

let nombre = 0;

plus.addEventListener("click", (e) => {
  nombre++;
  input.innerHTML = nombre;
  if (nombre > 10) {
    input.innerHTML = nombre = 10;
  }
});

moins.addEventListener("click", (e) => {
  nombre--;
  input.innerHTML = nombre;
  if (nombre < 0) {
    input.innerHTML = nombre = 0;
  }
});
