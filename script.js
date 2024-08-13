// Récupération des différents éléments
const container = document.querySelector(".container");
const leftSection = document.querySelector(".left");
const rightSection = document.querySelector(".right");

// Ecoute de l'événement "mouseenter" sur la section ayant la classe "left"
leftSection.addEventListener("mouseenter", () => {
  // Ajout de la classe "active-left"
  container.classList.add("active-left");
});

// Ecoute de l'événement "mouseleave" sur la section ayant la classe "left"
leftSection.addEventListener("mouseleave", () => {
  // Retrait de la classe "active-left"
  container.classList.remove("active-left");
});

// Ecoute de l'événement "mouseenter" sur la section ayant la classe "right"
rightSection.addEventListener("mouseenter", () => {
  // Ajout de la classe "active-right"
  container.classList.add("active-right");
});

// Ecoute de l'événement "mouseleave" sur la section ayant la classe "right"
rightSection.addEventListener("mouseleave", () => {
  // Retrait de la classe "active-right"
  container.classList.remove("active-right");
});
