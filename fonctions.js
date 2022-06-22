/************PREMIERE FACON DE FAIRE UNE FONCTION*************/
function faireQuelueChose() {
    console.log('je fais un truc');
}

/************DEUXIEME FACON DE FAIRE UNE FONCTION*************/
const faireUneTache =  () => {
    console.log('faire une tache');
}

faireQuelueChose();

faireUneTache();

/************FONCTION AVEC PARAMETRE**************/

const faireUneAutreTache =  (type) => {
    //le + sert a concatener
    console.log('Je fais: '+ type);
}
 faireUneAutreTache('du foot');
 faireUneAutreTache('les courses');