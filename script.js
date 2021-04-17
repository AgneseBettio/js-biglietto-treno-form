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


    // preparo per stampa valori in HTML
    nomeUtenteStampato.innerHTML = nomeUtente;
    // //funzione calcolo prezzo
    // offertaStampato.innerHTML =
    //     //funzione random carrozza
    //     nCarrozzaStampato.innerHTML =
    //     //funzione random ID codice biglietto
    //     codidiceBigliettoStampato.innerHTML =
    //     //funzione calcolo prezzo km e eta
    //     costoBigliettoStampato.innerHTML = 
})

//se clicchiamo su annulla dobbiamo ripulire il form.
ticketForm.addEventListener("reset", function () {

})


//var prezzoDefault = (0.21 * km).toFixed(2);

//prezzo del biglietto stampato dipenderà da funzione:

function calcoloBiglietto(eta, km) {

    var costo = (0.21 * km).toFixed(2);

    if (eta < 18) {
        costo = (costo - ((costo / 100) * 20)).toFixed(2);
        return costo;

    } else if (eta >= 65) {
        costo = (costo - ((costo / 100) * 40)).toFixed(2);
        return costo;
    }
}
//funzione per numeri random sino a 9
function randomNumberMax9 (){
    return Math.ceil(Math.random() * 9);
}
// Codice treno (numero casuale tra 90000 e 100000 escluso);
// creo ciclo?
var codiceTreno = randomNumberMax9 



// if (kmPercorsi === "" || etaPasseggero === "") {
//     alert("manca campo obligatorio")
// } else if (Number.isNaN(kmPercorsi) || Number.isNaN(etaPasseggero)) {
//     alert ("i km da percorrere e la vostra età vanno inseriti in cifre")    
// } else { 
//     var prezzoBiglietto;
//     if (etaPasseggero <= 17) { 
//         console.log(prezzoBiglietto = prezzoScontoJunior + "€")
//     } else if (etaPasseggero > 65) { 
//         console.log(prezzoBiglietto = prezzoScontoOver + "€")
//     } else {
//         console.log(prezzoBiglietto = prezzoIntero + "€")
//     }
// }

// document.getElementById("prezzo-finito").innerHTML= prezzoBiglietto;
// Partendo dall'esercizio del biglietto, aggiungiamo la parte visiva come da screenshot
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.