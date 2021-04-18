// ricopiato tutto js vecchio esercizio
/*il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65 */

// var kmPercorsi = parseInt(prompt("quanti chilometri devi percorrere?"));
// console.log("Km tragitto",kmPercorsi);
// var etaPasseggero = parseInt(prompt("quanti anni hai?"));
// console.log("Eta passeggero", etaPasseggero);
// var prezzoIntero = (0.21 * kmPercorsi).toFixed(2);
// console.log("prezzo intero", prezzoIntero);
// var prezzoScontoOver = (prezzoIntero - ((prezzoIntero / 100) * 40)).toFixed(2);
// console.log("biglietto scontato Over", prezzoScontoOver);
// var prezzoScontoJunior = (prezzoIntero - ((prezzoIntero / 100) * 20)).toFixed(2);
// console.log("biglietto scontato Junior", prezzoScontoJunior);

// Partendo dall'esercizio del biglietto, aggiungiamo la parte visiva come da screenshot
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

var ticketForm = document.getElementById("ticket-form");
ticketForm.addEventListener("submit", function (event) {
    //blocco refresh pagina default
    event.preventDefault();

    //vado  form per estrapolare elementi
    var form = event.currentTarget;
    //a leggere i campi inseriti nel form
    var formElements = form.elements;
    //estrapolo valori input da elementi form
    var nomeUtente = formElements.nome.value;
    var kmUtente = formElements.km.value;
    var etaFasciaUtente = formElements.eta.value;
    // variabili per emissione biglietto
    var nomeUtenteStampato = document.getElementById("nome-stampato");
    var offertaStampato = document.getElementById("offerta");
    var nCarrozzaStampato = document.getElementById("carrozza");
    var codidiceBigliettoStampato = document.getElementById("codice");
    var costoBigliettoStampato = document.getElementById("costo");
    // altre variabili per stampa
    var bigliettoDefault = (0.21 * parseInt(kmUtente)).toFixed(2);
    var bigliettoScontoMin = (bigliettoDefault - ((bigliettoDefault / 100) * 20)).toFixed(2);
    var bigliettoScontoOver = (bigliettoDefault - ((bigliettoDefault / 100) * 40)).toFixed(2);
    if (nomeUtente === "" || kmUtente === "") {
        alert(" per l'emessione del biglietto bisogna compilare tutti i dati del form")
    } else {
        // preparo per stampa valori in HTML
        nomeUtenteStampato.innerHTML = nomeUtente;
        //funzione calcolo prezzo
        if (formElements.eta.value === "minorenne") {
            offertaStampato.innerHTML = " sconto minorenne ";
        } else if (formElements.eta.value === "over65") {
            offertaStampato.innerHTML = " sconto over 65 ";
        } else {
            offertaStampato.innerHTML = " non applicabile ";
        }
        //funzione random carrozza
        nCarrozzaStampato.innerHTML = randomNumberMax12();
        //funzione random ID codice biglietto
        codidiceBigliettoStampato.innerHTML = getRandomNumberBetween(10000, 99999);
        //funzione calcolo prezzo km e eta
        if (etaFasciaUtente === "over65") {
            costoBigliettoStampato.innerHTML = bigliettoScontoOver + "€";
        } else if (etaFasciaUtente === "minorenne") {
            costoBigliettoStampato.innerHTML = bigliettoScontoMin + "€";
        } else {
            costoBigliettoStampato.innerHTML = bigliettoDefault + "€";
        }    
        showItFlex("printed-ticket");
    }
})
var bgColoredTicket = document.getElementById("name-section");
bgColoredTicket.style.backgroundColor = "#e7e4e4";

//se clicchiamo su annulla dobbiamo ripulire il form.
ticketForm.addEventListener("reset", function (event) {
    //vado  form per estrapolare elementi
    var form = event.currentTarget;
    //a leggere i campi inseriti nel form
    var formElements = form.elements;
    //estrapolo valori da elementi form
    var nomeUtente = formElements.nome.value;
    var kmUtente = formElements.km.value;
    var etaFasciaUtente = formElements.eta.value;
    // variabili per cancellare dati biglietto
    var nomeUtenteStampato = document.getElementById("nome-stampato");
    var offertaStampato = document.getElementById("offerta");
    var nCarrozzaStampato = document.getElementById("carrozza");
    var codidiceBigliettoStampato = document.getElementById("codice");
    var costoBigliettoStampato = document.getElementById("costo");
    // cancello span
    var nomeUtenteStampato = "";
    var offertaStampato = "";
    var nCarrozzaStampato = "";
    var codidiceBigliettoStampato = "";
    var costoBigliettoStampato = "";
    hideIt("printed-ticket");
})

//funzione per numeri random sino a 12
function randomNumberMax12() {
    return Math.ceil(Math.random() * 12);
}
// Codice treno (numero casuale tra 90000 e 100000 escluso);
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function showItFlex(id) {
    document.getElementById(id).style.display = 'flex';
}
function hideIt(id) {
    document.getElementById(id).style.display = 'none';
}

//colore bottoni - perchè così non va?
// var colorBtn = document.querySelectorAll(".btn");
// colorBtn.addEventListener("click", function(event){
//     colorBtn.style.borderColor = "#B91450";
// })


//bnt click e reset
var btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", function(event){
    btnSubmit.style.borderColor = "#B91450";
})
var btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", function(event){
    var btnSubmit = document.getElementById("btn-submit");
    btnSubmit.style.borderColor = "#e7e4e4";
})



