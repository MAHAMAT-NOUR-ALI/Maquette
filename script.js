var imageno =1;
displayimg(imageno);

function nextimg(n){
  displayimg(imageno +=n);
}

function currentSlide(n){
  displayimg (imageno = n);
}

function displayimg(n){
  var i;
  var image = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");

  if( n > image.length ){
    imageno = 1;
  }

  if( n < 1 ){
    imageno = image.length;
  }
  
  for (i=0; i < image.length; i++){
    image[i].style.display ="none";
  }

  for (i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }


   image[imageno -1].style.display= "block";
   dots[imageno +1].className += "active";
  }

  let SlideIndex=0;
  showSlides();

  function showSlides () {
    let slides = document.getElementsByClassName("image");

    for ( let i = 0; i < slides.length; i++ ) {
      slides[i].style.display = "none";
    }
    SlideIndex++;
    if (SlideIndex > slides.length) {SlideIndex = 1}

    slides[SlideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
  }


// initialisation du dictionnaire  (les produits sont des clés et le nombre de click sont les valeur de ces clés)
  let Dictionnaire = {};


  // Définition de la fonction qui permettra l'ajout d'élément au panier en incrémentant le nombre d'elts et en les ajoutant à la liste (panier)
function addproduit (nom_produit) {
  


  // incrémentation

  let qte = document.getElementById("quantite");
  quantite = parseInt(qte.innerHTML);
  qte.innerHTML = quantite + 1;


  
  // on teste si l'elt click existe ou pas 

  if (nom_produit in Dictionnaire) {
    
    // si oui on incremente sa valeur (+1)
    Dictionnaire[nom_produit]+= 1;

  } else {


    // si non on l'ajoute au dic avec un valeur = 1


    Dictionnaire[nom_produit] = 1;

    
  };


  // on récuppère notre liste via la methode getelementbyid et on attribut sa valeur à la cons produits
  const produits = document.getElementById("mes_produits");

  // on récupère aussi tous les listes (s'il y'en a)
  const anciensElements = produits.querySelectorAll("li");

  // on parcours en testant si le produit clické existe 
  anciensElements.forEach(li => {
    if (li.textContent.startsWith(`${nom_produit}:`)) {

      // si oui on supprime la liste qui le contient 
      produits_nbr.removeChild(li);
    }
  });

  // on ajoute le produit et sa valeur dans le dic  à la cons produit_act
  const produit_act = Dictionnaire[nom_produit];

  // on cré un nouveau elt 
  const new_li = document.createElement("li");

  // on ajoute du contenu le produit et sa valeur à notre nouveau elt li crée
  new_li.textContent = `${nom_produit}: ${produit_act}`;
  
  // et en fin on l'ajoute a son parent ul contenu dans la cons produits
  produits.appendChild(new_li);
}



