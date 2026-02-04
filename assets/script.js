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

// Déclaration des constantes
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

// Ajout d'un event listener sur la flèche droite
arrowRight.addEventListener("click", function (e) {
  console.log(this.className); // Affiche le nom de la classe
  console.log(e.currentTarget === this); // Vérifie que l'élément cliqué est celui qui écoute l'événement (true)
});

// Ajout d'un event listener sur la flèche gauche
arrowLeft.addEventListener("click", function (e) {
  console.log(this.className);
  console.log(e.currentTarget === this);
});
