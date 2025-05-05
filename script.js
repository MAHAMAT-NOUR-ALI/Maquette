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


  
  let Dictionnaire = {};

  let valeur_01 = 0

  
function addproduit (nom_produit) {
  


  let qte = document.getElementById("quantite");
  quantite = parseInt(qte.innerHTML);
  qte.innerHTML = quantite + 1;


                  

  if (nom_produit in Dictionnaire) {
    

    Dictionnaire[nom_produit]+= 1;

  } else {

    Dictionnaire[nom_produit] = 1;

    
  };

  const produits_nbr = document.getElementById("mes_produits");

  const anciensElements = produits_nbr.querySelectorAll("li");

  anciensElements.forEach(li => {
    if (li.textContent.startsWith(`${nom_produit}:`)) {
      produits_nbr.removeChild(li);
    }
  });

  const valeur = Dictionnaire[nom_produit];

    const elment_list = document.createElement("li");
    elment_list.textContent = `${nom_produit}: ${valeur}`;
    produits_nbr.appendChild(elment_list);
}



