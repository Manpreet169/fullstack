/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/



let sum = 10 + 20;

console.log("esercizio A:")

console.log(sum)






/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = 

Math.floor(Math.random() *21);

console.log("esercizio B:");
console.log(random);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/


console.log("esercizio C:");

let me = {
  name: "Manpreet",
  surname: "Singh",
  age: 19
};
 
console.log(me);


/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/



delete me.age;

console.log("esercizio:D");
console.log(me);


/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/


me.skills = ['JavaScript']; //css e html non sono considerati proprio dei linguaggi di programmazione quindi non li metto 
console.log("esercizio:E");
console.log(me);


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/



me.skills.push(`HTML`);
console.log("esercizio:F");
console.log(me);



/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/




me.skills.pop();
console.log("esercizio:G");
console.log(me);





// Funzioni
console.log("FUNZIONI:");

/* ESERCIZIO 1;
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/



 function dice() {
    return Math.floor(Math.random() *6) + 1;

 }
console.log("esercizio:1");
console.log(dice());




/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function WhoIsBigger(numero1, numero2){
  if(numero1 > numero2){
    return numero1;
  } else {
    return numero2;
  }
}

console.log("esercizio:2");
console.log(WhoIsBigger(291, 78));

//--------Funzione che crea numeri random fino a 100 e ritorna quello maggiore 

/*function WhoIsBigger(){
  let numero1 = Math.floor(Math.random() *100) + 1;
  let numero2 = Math.floor(Math.random() *100) + 1;
  
  if(numero1 > numero2){
    return numero1;
  } else {
    return numero2;
  }
}
console.log(WhoIsBigger());
*/


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(Input) {
  return Input.split(" ")
}
console.log("esercizio 3:")
console.log(splitMe("Questa è una stringa"));





/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(slic, prim) {
  return prim ? slic.slice(1) : slic.slice(0, -1);
}

console.log("esercizio 4:")
console.log(deleteOne("Hello", true)); 
console.log(deleteOne("Hello", false)); 





/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(ingresso) {
  let risultato = '';

  for (let i = 0; i < ingresso.length; i++) {
      if (isNaN(parseInt(ingresso[i]))) { 
          risultato += ingresso[i];
      }
  }
  return risultato;
}

console.log("esercizio 5:")
console.log(onlyLetters("ci sono 195 paesi riconosciuti nel mondo")); 





/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(email) {
  const atIndex = email.indexOf('@');
  const dotIndex = email.indexOf('.', atIndex);
  
  return atIndex !== -1 && dotIndex !== -1 && dotIndex > atIndex;
}

console.log("esercizio 6:")
console.log(isThisAnEmail("example@example.com")); 
console.log(isThisAnEmail("example@example")); 




/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const giorniDellaSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  const giornoAttuale = new Date();
  const giorno = giornoAttuale.getDay();
  return giorniDellaSettimana[giorno];
}
console.log("esercizio 7:")
console.log(whatDayIsIt());





/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/





function rollTheDices(lanci) {
 
  const Valore = [];
  let sum = 0;
  
  for (let i = 0; i < lanci; i++) {
      const value = dice();
      sum += value;
      Valore.push(value);
  }
  
  return {
      sum: sum,
      values: Valore
  };
}

console.log("esercizio 8:")

console.log(rollTheDices(3)); 


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/


function howManyDays(data) {

  const dataOggi = new Date();
  
  const msData = data.getTime();
  const msOggi = dataOggi.getTime();
  
  const differenzaMs = msOggi - msData;
  
  const millisecondiInUnGiorno = 1000 * 60 * 60 * 24;
  const giorniTrascorsi = Math.floor(differenzaMs / millisecondiInUnGiorno);
  
  return giorniTrascorsi;
}


const dataInput = new Date('2024-03-25'); 
console.log("esercizio: 9")
console.log(howManyDays(dataInput)); 




/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(dataCompleanno) {
  const dataOggi = new Date();
  const giornoCompleanno = dataCompleanno.getDate();
  const meseCompleanno = dataCompleanno.getMonth() + 1; 
  const oggiGiorno = dataOggi.getDate();
  const oggiMese = dataOggi.getMonth() + 1; 
  return giornoCompleanno === oggiGiorno && meseCompleanno === oggiMese;
}

const Compleanno = new Date('2004-12-08'); 
console.log("esercizio: 10")
console.log("E' oggi il mio compleanno?", isTodayMyBirthday(Compleanno));








// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(ogg, prop) {
  
  if (ogg.hasOwnProperty(prop)) {
      delete ogg[prop];
  }
  return ogg;
}
const oggetto = {
  nome: "Elon Musk",
  eta: 52,
  lavoro: "Imprenditore"
};
console.log("esercizio: 11")
console.log("Oggetto originale:", oggetto);

const oggettoMod = deleteProp(oggetto, "lavoro");
console.log("Oggetto modificato:", oggettoMod);



/* ESERCIZIO 12
Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie(movies) {
  let filmPiuRecente = null;
  let annoPiuRecente = 0;
  
  
  movies.forEach(movie => {
    
    const annoFilm = parseInt(movie.Year);
    
    
    if (annoFilm > annoPiuRecente) {
      annoPiuRecente = annoFilm;
      filmPiuRecente = movie;
    }
  });
  
  
  return filmPiuRecente;
}


const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
console.log("esercizio: 12")

const movieArray = movies;
const recentMovie = newestMovie(movieArray);
console.log("Il film più recente è:", recentMovie);






/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/


function countMovies(movies) {
  return movies.length;
}


console.log("esercizio: 13")

const numberOfMovies = countMovies(movies);
console.log("Il numero di film è:", numberOfMovies);


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/


function onlyTheYears(movies) {

  const anniArray = movies.map(movie => movie.Year);
  return anniArray;
}

const anni = onlyTheYears(movies);
console.log("esercizio: 14")
console.log("Anni dei film:", anni);



/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movies) {
  const lastMillenniumMovies = movies.filter(movie => {
      const year = parseInt(movie.Year);
      return year >= 1000 && year < 2000;
  });
  return lastMillenniumMovies;
}
const lastMillennium = onlyInLastMillennium(movies);
console.log("esercizio: 15")
console.log("Film prodotti nel millennio scorso:", lastMillennium);



/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  let sum = 0;
  
  movies.forEach(movie => {
      sum += parseInt(movie.Year);
  });
  
  return sum;
}

console.log("esercizio: 16")
const totalYears = sumAllTheYears(movies);
console.log("Somma degli anni:", totalYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(searchString, movies) {
  const foundMovies = movies.filter(movie => {
      const title = movie.Title.toLowerCase();
      const search = searchString.toLowerCase();
      return title.includes(search);
  });
  return foundMovies;
}

console.log("esercizio: 17")

const searchString = "lord";
const foundMovies = searchByTitle(searchString, movies);
console.log("Film trovati:", foundMovies);




/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(movies,stringa){
  let ogg = {
    match : [],
    unmatch : []
  }
 
  movies.forEach(function(movie) {
    if (movie.Title.toLowerCase().includes(stringa.toLowerCase())) {
      ogg.match.push(movie);
    }else{
      ogg.unmatch.push(movie);
    }
  });

  return ogg;
}
console.log("esercizio 18:")

console.log("i film sono elencati i film che includono e quelli che non includono la stringa passata per parametro all`interno del proprio titolo")
console.log(searchAndDivide(movies, 'LORD'));



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(index, movies) {
  
  if (index >= 0 && index < movies.length) {
      
      const updatedMovies = [...movies.slice(0, index), ...movies.slice(index + 1)];
      return updatedMovies;
  } else {
      
      return movies;
  }
}

console.log("esercizio 19:")
const indexToRemove = 2; 
const updatedMovies = removeIndex(indexToRemove, movies);
console.log("Array aggiornata:", updatedMovies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function getcontainerelement() {
  return document.getElementById("container");
}

console.log("esercizio 20:")
const containerElement = getcontainerelement();
console.log(containerElement);



/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function sceglitd() {
  return document.querySelectorAll("td");
}
console.log("esercizio 21:")
const tableCells = sceglitd();
console.log(tableCells);




/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampatd() {
  
  const tableCells = document.querySelectorAll("td");
  tableCells.forEach(cell => {
      console.log(cell.textContent);
  });
}
console.log("esercizio 22:")
stampatd();




/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function cambiasfondolink() {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
      link.style.backgroundColor = "red";
  });
}
console.log("esercizio 23:")
cambiasfondolink();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function nuovoelemento() {
  const newItem = document.createElement("li");
  const textNode = document.createTextNode("Nuovo elemento");
  newItem.appendChild(textNode);
  const myList = document.getElementById("myList");
  myList.appendChild(newItem);
}

console.log("esercizio 24:")
nuovoelemento();



/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function puliscilista() {
  const myList = document.getElementById("myList");

  while (myList.firstChild) {
      myList.removeChild(myList.firstChild);
  }
}

console.log("esercizio 24:")
puliscilista();










/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function aggiungiclasse() {
  const rows = document.querySelectorAll("tr");

  rows.forEach(row => {
      row.classList.add("test");
  });
}

console.log("esercizio 25:")

aggiungiclasse();








// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

