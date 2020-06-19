var creaBtn = document.getElementById("creaBiglietto");
var annullaBtn = document.getElementById("annullaBiglietto");
creaBtn.addEventListener("click", function () {

var prezzoTotale;
var prezzoKm = 0.21;
var nomeCompleto;
var nome = document.getElementById("nome").value;
var cognome = document.getElementById("cognome").value;
nomeCompleto = nome + " " + cognome;
var km = document.getElementById("km").value;
var categoria = document.getElementById("categoria").value;
var minCarrozza = 1;
var maxCarrozza = 12;
var minNumTreno = 90000;
var maxNumTreno = 100000;


 //prezzo creaBiglietto
 if (categoria == "minorenne") {
   prezzoTotale = km * prezzoKm - 20/100 * (km * prezzoKm);
 } else if (categoria == "over65") {
   prezzoTotale = km * prezzoKm - 40/100 * (km * prezzoKm);
 } else {
   prezzoTotale = km * prezzoKm;
 }

 var numeroTreno = Math.floor(Math.random()*(maxNumTreno - minNumTreno + 1)) + minNumTreno;
 var numeroCarrozza = Math.floor(Math.random()*(maxCarrozza - minCarrozza + 1)) + minCarrozza;

 document.getElementById('passeggero').innerHTML = nomeCompleto;
 document.getElementById('treno').innerHTML = numeroTreno;
 document.getElementById('carrozza').innerHTML = numeroCarrozza;
 document.getElementById('prezzoBiglietto').innerHTML = prezzoTotale.toFixed(2);
 document.getElementById('categoriaPasseggero').innerHTML = categoria;

document.getElementById('biglietto').className = "show";
})

annullaBtn.addEventListener("click", function () {
  document.getElementById('biglietto').className = "hidden";

  document.getElementById("nome").value = "";
  document.getElementById("cognome").value = "";
  document.getElementById("km").value = "";
  document.getElementById("categoria").value = "Maggiorenne";
});
