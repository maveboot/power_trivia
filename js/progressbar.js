
var interval = setInterval(doeDit, 1000);

var makeProgress = document.querySelector('#progress');
var volgendeKnop = document.querySelector('#knop');
var timer        = document.querySelector('#timer');

var klok = 10;
var teller = 0;

// functie wanneer gebruiker geen keuze maakt
var keuze = 0;


function doeDit() {
    if(teller == 100){
      if (keuze === 0) {
        tijdIsOm();
        zoekJuistAntwoord();
      }
      volgendeKnop.style.display = 'grid';
      clearInterval(interval);
    }else{
      teller += 10;
      klok--;
      timer.innerHTML = '0:0' + klok;
      makeProgress.style.width = teller + '%';
    }
}

// Antwoord keuzes
var antwoord1 = document.querySelector('#antwoord1');
var antwoord2 = document.querySelector('#antwoord2');
var antwoord3 = document.querySelector('#antwoord3');

// Juiste antwoord
var verborgen = document.querySelector('#verborgen');
var juist_antwoord_db = verborgen.innerHTML;

// Als er geklikt wordt
antwoord1.addEventListener("click", checkAntwoord);

// TODO: van checkantwoord123 één functie maken
function checkAntwoord() {

  // Geef aan dat er geklikt is
  keuze++;

  // Stop de tijd als antwoord gekozen is
  clearInterval(interval);
  volgendeKnop.style.display = 'grid';

  if(juist_antwoord_db == antwoord1.innerHTML){

    // Juiste antwoord kleuren
    antwoord1.style.backgroundColor = 'green';
    antwoord1.style.color = 'white';

  }else {
    // Foute keuze kleuren
    antwoord1.style.backgroundColor = 'red';
    antwoord1.style.color = 'white';

    zoekJuistAntwoord();
  }

}

// Als er geklikt wordt
antwoord2.addEventListener("click", checkAntwoord2);

function checkAntwoord2() {

  // Geef aan dat er geklikt is
  keuze++;

  // Stop de tijd als antwoord gekozen is
  clearInterval(interval);
  volgendeKnop.style.display = 'grid';

  if(juist_antwoord_db == antwoord2.innerHTML){

    // Juiste antwoord kleuren
    antwoord2.style.backgroundColor = 'green';
    antwoord2.style.color = 'white';

  }else {
    // Foute keuze kleuren
    antwoord2.style.backgroundColor = 'red';
    antwoord2.style.color = 'white';

    // Juiste antwoord vinden en kleuren
    zoekJuistAntwoord();
  }

}

// Als er geklikt wordt
antwoord3.addEventListener("click", checkAntwoord3);

function checkAntwoord3() {

  // Geef aan dat er geklikt is
  keuze++;

  // Stop de tijd als antwoord gekozen is
  clearInterval(interval);
  volgendeKnop.style.display = 'grid';

  if(juist_antwoord_db == antwoord3.innerHTML){

    // Juiste antwoord kleuren
    antwoord3.style.backgroundColor = 'green';
    antwoord3.style.color = 'white';

  }else {
    // Foute keuze kleuren
    antwoord3.style.backgroundColor = 'red';
    antwoord3.style.color = 'white';

    // Juiste antwoord vinden en kleuren
    zoekJuistAntwoord();
  }

}


// Zoek bij fout antwoord, waar juiste antwoord zit en kleur die groen
function zoekJuistAntwoord() {

  var allAnswers = document.querySelectorAll(".antwoorden");

  var i;
  for(i = 0; i < allAnswers.length; i++) {
    if(juist_antwoord_db == allAnswers[i].innerHTML) {
      allAnswers[i].style.backgroundColor = 'green';
      allAnswers[i].style.color = 'white';
    }
  }
}

// Antwoorden na max tijd verbieden
function tijdIsOm() {

  antwoord1.style.pointerEvents = 'none';
  antwoord2.style.pointerEvents = 'none';
  antwoord3.style.pointerEvents = 'none';

  antwoord1.style.opacity = '0.6';
  antwoord2.style.opacity = '0.6';
  antwoord3.style.opacity = '0.6';

}
// TODO: Antwoord opslaan
