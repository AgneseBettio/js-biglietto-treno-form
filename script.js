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

    // preparo per stampa valori in HTML
    nomeUtenteStampato.innerHTML = nomeUtente;
    //funzione calcolo prezzo
    if (formElements.eta.value === "minorenne") {
        offertaStampato.innerHTML = " sconto minorenne ";
    } else if (formElements.eta.value === "over65") {
        offertaStampato.innerHTML = " sconto over 65 ";
    } else {
        offertaStampato.innerHTML = " non applicabile "
    }
    //funzione random carrozza
    nCarrozzaStampato.innerHTML = randomNumberMax12();
    //funzione random ID codice biglietto
    codidiceBigliettoStampato.innerHTML = getRandomNumberBetween(10000, 99999);
    //funzione calcolo prezzo km e eta
    if (formElements.eta.value === "over65") {
        costoBigliettoStampato.innerHTML = bigliettoScontoOver + "€";
    } else if (formElements.eta.value === "minorenne") {
        costoBigliettoStampato.innerHTML = bigliettoScontoMin + "€";
    } else {
        costoBigliettoStampato.innerHTML = bigliettoDefault + "€";
    }    
    showIt("printed-ticket");
})

//se clicchiamo su annulla dobbiamo ripulire il form.
ticketForm.addEventListener("reset", function (event) {
    document.getElementById("printed-ticket").style.display = "none";
})
//funzione per numeri random sino a 12
function randomNumberMax12() {
    return Math.ceil(Math.random() * 12);
}
// Codice treno (numero casuale tra 90000 e 100000 escluso);
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function showIt(id) {
    document.getElementById(id).style.display = 'block';
}




// if (kmPercorsi === "" || etaPasseggero === "") {
//     alert("manca campo obligatorio")


