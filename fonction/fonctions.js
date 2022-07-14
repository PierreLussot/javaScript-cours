/************PREMIERE FACON DE FAIRE UNE FONCTION*************/
function faireQuelueChose() {
  console.log("je fais un truc");
}

/************DEUXIEME FACON DE FAIRE UNE FONCTION*************/
const faireUneTache = () => {
  console.log("faire une tache");
};

faireQuelueChose();

faireUneTache();

/************FONCTION AVEC PARAMETRE**************/

const faireUneAutreTache = (type) => {
  //le + sert a concatener
  console.log("Je fais: " + type);
};
faireUneAutreTache("du foot");
faireUneAutreTache("les courses");

/************FONCTION NOMBRE PREMIER**************/
let estPremier = true;
const nombrePremier = function (nombre) {
  for (let i = 2; i < nombre; i++) {
    if (nombre % i === 0) {
      estPremier = false;
      console.log("pas nombre premier " + nombre + " est divisible par " + i);
      break;
    }
  }
  if (estPremier) {
    console.log(nombre + " le nombre est premier ");
  }
};

/************FONCTION MOYENNE ELEVE **************/
/* let classeA = [
  {
    nom: "Pierre",
    prenom: "Lussot",
    note: 12,
  },
  {
    nom: "Isabelle",
    prenom: "La tour",
    note: 18,
  },
  {
    nom: "Jojo",
    prenom: "Bidule",
    note: 12,
  },
  {
    nom: "Luc",
    prenom: "Sky",
    note: 5,
  },
];

let classeB = [
  {
    nom: "Alain",
    prenom: "Tran",
    note: 13,
  },
  {
    nom: "Arthur",
    prenom: "Minimois",
    note: 10,
  },
  {
    nom: "Babibel",
    prenom: "Babel",
    note: 8,
  },
  {
    nom: "Leoni",
    prenom: "Louise",
    note: 2,
  },
];

const moyenneClasse = (classe) => {
  for (let i = 0; i < classe.length; i++) {
    if (classe[i].note < 10) {
      console.log(classe[i].nom + " Désolé, tu n'as pas la moyenne.");
    } else {
      console.log(
        classe[i].nom +
          " Félicitations à toi, tu passes avec une moyenne de" +
          classe[i].note
      );
    }
  }
};

moyenneClasse(classeB); */

/************FONCTION COMPTEUR DE PHRASE **************/

/* let phrase =
  "salut maman est ce tout va bien maman merci maman est ce que maman va bien";

let separation = phrase.toLowerCase().split(" ");
let compteur = {}; 
for (let i = 0; i < separation.length; i++) {
  let mots = separation[i];
 
  if (compteur[mots] === undefined) {
    compteur[mots] = 1; 
  } else {
    compteur[mots]++;
  }
}console.log(compteur); */

/************FONCTION MEUILLEUR ELEVE**************/
let eleve1 = {
  nom: "Jean",
  note: [5, 8, 8],
};

let eleve2 = {
  nom: "Marc",
  note: [5, 18, 20],
};

function bestEleve(a, b) {
  let note1 = 0;
  let note2 = 0;
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < a.note.length; i++) {
    note1 += a.note[i];
    //console.log("note eleve1 " + note1);

    let nbrNote = a.note.length;
    //console.log("moyenne eleve1 " + nbrNote);

    let result = note1 / nbrNote;
    result = result.toFixed(2);
    //console.log("moyenne eleve1 " + result);
    arr1 = [parseFloat(result)];
  }

  for (let i = 0; i < b.note.length; i++) {
    note2 += b.note[i];
    // console.log("note eleve2 " + note2);

    let nbrNote = b.note.length;
    //console.log("moyenne eleve2 " + nbrNote);

    let result = note2 / nbrNote;
    result = result.toFixed(2);
    //console.log("moyenne eleve2 " + result);
    arr2 = [parseFloat(result)];
  }
  //console.log(arr2);
  let o = parseFloat(arr1[0]);
  let p = parseFloat(arr2[0]);
  console.log(o);
  console.log(p);
  if (o > p) {
    console.log("eleve 1 meuilleur moyenne");
  } else {
    console.log("eleve 2 meuilleur moyenne");
  }
}

/************FONCTION CROISSANCE D'UNE POPULATION**************/

function pourcentagePopulation(chiffre, pourcentage, seuil) {
  let resultaPourcentage = chiffre * (pourcentage / 100);

  for (let i = 0; i < seuil; i++) {
    console.log(i);
    chiffre += resultaPourcentage;
    console.log(chiffre);
    if (chiffre >= seuil) {
      console.log(
        "Au bout de  " +
          i +
          "  anees, il y aura  " +
          chiffre +
          " perssones pour une augmentation de 2 % par an  "
      );
      break;
    }
  }
}

pourcentagePopulation(3000, 2, 4000);
