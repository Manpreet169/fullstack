/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
var a = 10;
var b = 5;

var trovaMaggiore = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}; 
var maggiore = trovaMaggiore(a, b);
console.log("Il numero maggiore tra", a, "e", b, "è", maggiore);

/*




//-----------------------------------------------------------------------------------\\





/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* 
var numero = 10; 

if (numero !== 5) {
    console.log("not equal");
} 
*/


//-----------------------------------------------------------------------------------\\




/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/*
 var numero = 15; 

if (numero % 5 === 0) {
    console.log("divisibile per 5");
}
*/





//-----------------------------------------------------------------------------------\\






/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
 function verifica(x, y) {
    
    if (x === 8 || y === 8 || x + y === 8 || x - y === 8 || y - x === 8) {
        return true;
    } else {
        return false; 
    }
} 
*/


//-----------------------------------------------------------------------------------\\



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/*

var totalShoppingCart = 60; // Modifica questo valore per testare diversi scenari
var costoSpedizione = 10;

if (totalShoppingCart > 50) {
    costoSpedizione = 0; // Spedizione gratuita
}

// Calcolo dell'ammontare totale da addebitare all'utente per il checkout
var ammontareTotale = totalShoppingCart + costoSpedizione;

console.log("L'ammontare totale da addebitare all'utente per il checkout è:", ammontareTotale);
 */


//-----------------------------------------------------------------------------------\\








/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


/*
var totalShoppingCart = 60; // Modifica questo valore per testare diversi scenari


var costoSpedizione = 10;


if (totalShoppingCart > 50) {
    costoSpedizione = 0;
}


var scontoBlackFriday = totalShoppingCart * 0.2;
var totaleConSconto = totalShoppingCart - scontoBlackFriday;


if (totaleConSconto > 50) {
    costoSpedizione = 0; // Spedizione gratuita
}


var ammontareTotale = totaleConSconto + costoSpedizione;


console.log("L'ammontare totale da addebitare all'utente per il checkout è:", ammontareTotale);
*/





//-----------------------------------------------------------------------------------\\






/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* 

var numero1 = 20;
var numero2 = 10;
var numero3 = 30;


if (numero1 >= numero2 && numero1 >= numero3) {
    if (numero2 >= numero3) {
        console.log(numero1, numero2, numero3);
    } else {
        console.log(numero1, numero3, numero2);
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    if (numero1 >= numero3) {
        console.log(numero2, numero1, numero3);
    } else {
        console.log(numero2, numero3, numero1);
    }
} else {
    if (numero1 >= numero2) {
        console.log(numero3, numero1, numero2);
    } else {
        console.log(numero3, numero2, numero1);
    }
}

 */





//-----------------------------------------------------------------------------------\\







/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*
 function verificaNumero(valore) {
    if (typeof valore === 'number' && !isNaN(valore)) {
        return true; // Il valore è un numero
    } else {
        return false; // Il valore non è un numero
    }
} 
*/




//-----------------------------------------------------------------------------------\\





/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* 

function verificaPariDispari(numero) {
    if (numero % 2 === 0) {
        return "Il numero è pari";
    } else {
        return "Il numero è dispari";
    }
} 
*/



//-----------------------------------------------------------------------------------\\









/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*
 let val = 7;

if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
} 
*/





//-----------------------------------------------------------------------------------\\






/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* 
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
};

me.city = 'Toronto';

console.log(me); 
*/




//-----------------------------------------------------------------------------------\\






/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


/* 
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
};

delete me.lastName;

console.log(me); 
*/





//-----------------------------------------------------------------------------------\\






/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* 
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
};

me.skills.pop();

console.log(me);
 */



//-----------------------------------------------------------------------------------\\





/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* 
let numeri = [];

for (let i = 1; i <= 10; i++) {
    numeri.push(i);
}

console.log(numeri);
 */




//-----------------------------------------------------------------------------------\\






/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* if (numeri.length > 0) {
    numeri[numeri.length - 1] = 100;
} else {
    console.log("L'array è vuoto. Impossibile sostituire l'ultimo elemento.");
}

console.log(numeri); */
