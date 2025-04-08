//variable

const boutonsModale = document.querySelectorAll('.bouton-modale');

const modale = document.querySelector('.modale');

for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
    console.log(i)
}

//fonction

function openModale(){

    modale.classList.add("visible");
    modale.addEventListener("click", closeModale);
    console.log(modale)
}

function closeModale() {
  

    modale.classList.remove('visible');
console.log("patate")

}