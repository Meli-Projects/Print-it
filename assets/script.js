const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// index courant
let indexTable = 0;

// Déclaration des constantes
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const dots = document.querySelector(".dots"); 
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p"); 


// fonction qui met à jour l'affichage (image + texte) bannière
function updateSlide() {
  bannerImg.setAttribute( 
    "src","./assets/images/slideshow/" + slides[indexTable].image
  );
  
  bannerText.innerHTML = slides[indexTable].tagLine;

}
// fonction qui met à jour l'affichage (dot) bannière
function updateDot(index) {
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => dot.classList.remove("dot_selected"));
  allDots[index].classList.add("dot_selected");
}

// Gestion des bulles (bullet du slider)
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div"); 
	newDot.className = "dot"; 
	
	if (i === 0) {
		newDot.classList.add("dot_selected") 
}	
	dots.appendChild(newDot); 
}

// Gestion des flêches
arrowRight.addEventListener("click", function (e) {

  	if (indexTable === slides.length - 1) {
  	indexTable = 0;

} 	else {
  	indexTable++;
}
  updateSlide();
  updateDot(indexTable);
});

// Ajout d'un event listener sur la flèche gauche
arrowLeft.addEventListener("click", function (e) {

	indexTable--;

	if (indexTable < 0) {
  	indexTable = slides.length - 1;

}
  updateSlide();
  updateDot(indexTable);
});

updateSlide();
updateDot(indexTable);