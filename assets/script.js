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
const dots = document.querySelector(".dots"); // Sélection de la div .dots qui servira de conteneur aux bullet points (élément parent)

// Gestion des flêches
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

// Gestion des bulles (bullet du slider)
// Début de la boucle pour répéter la création et l'ajout des bulles en fonction du nombre de slides
for (let i = 0; i < slides.length; i++) {
	const newDot = document.createElement("div"); // Création d'un nouvel élément div qui représentera une bulle (dot)
	newDot.className = "dot"; // Ajout de la classe CSS "dot" à la bulle pour qu'elle soit stylisée
	
		// Ajout du style "sélectionné" sur le premier point (slide affichée au chargement)
	if (i === 0) {
		newDot.classList.add("dot_selected") // Ajoute la class spécifique au point actif
}	
	dots.appendChild(newDot); // Insertion de la bulle dans le conteneur .dots
}
