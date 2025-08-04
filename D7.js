console.log("--------------------------------------------------------ES1");
/* ESERCIZIO 1
Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
const strConc = (str1, str2) => (str1.slice(0, 2) + str2.slice(-3, str2.length)).toUpperCase();

const stringResult = strConc("prato", "grandissimo");

console.log("la stringa risultante è ", stringResult);

console.log("--------------------------------------------------------ES2");
/* ESERCIZIO 2 (for)
Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
const numRand = (n) => Math.floor(Math.random() * n);
const nRandom = numRand(101);
console.log("generatore di numeri random", nRandom);

const oneHundredArrRandom = [];
for (let i = 0; i < 10; i++) {
  oneHundredArrRandom.push(numRand(101));
}
console.log("l`array finale :", oneHundredArrRandom);

console.log("--------------------------------------------------------ES3");
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const numberArray = structuredClone(oneHundredArrRandom);

const onlyEvenNumbers = numberArray.filter((num) => num % 2 === 0);

console.log("array di soli numeri pari", onlyEvenNumbers);

console.log("--------------------------------------------------------ES4");
/* ESERCIZIO 4 (forEach)
Scrivi una funzione per sommare i numeri contenuti in un array
*/
const numberArraySum = structuredClone(numberArray);
let somma = 0;

numberArraySum.forEach((num) => (somma += num));
console.log(numberArraySum);
console.log("la somma degli elementi dell`array è ", somma);

console.log("--------------------------------------------------------ES5");
/* ESERCIZIO 5 (reduce)
Scrivi una funzione per sommare i numeri contenuti in un array
*/
const reduceNumberArray = structuredClone(numberArray);
const reducedSum = reduceNumberArray.reduce((acc, curr) => acc + curr, 0);
console.log(reduceNumberArray);
console.log("la somma usando reduce", reducedSum);

console.log("--------------------------------------------------------ES6");
/* ESERCIZIO 6 (map)
Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function arrayPlusN(array, n) {
  return array.map((num) => num + n);
}
console.log();

console.log(arrayPlusN(oneHundredArrRandom, 5));

console.log("--------------------------------------------------------ES7");
/* ESERCIZIO 7 (map)
Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const arrayOfStr = ["ciao", "hola", "salut", "hi"];

function arrayLetters(array) {
  return array.map((str) => str.length);
}

console.log("numero di lettere di ogni stringa: ", arrayLetters(arrayOfStr));

console.log("--------------------------------------------------------ES8");
/* ESERCIZIO 8 (forEach o for)
Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function onlyOddNumbers() {
  let arrayFullNumbers = [];
  for (let i = 0; i < 100; i++) {
    arrayFullNumbers[i] = i;
  }
  const arrayOddNumbers = arrayFullNumbers.filter((num) => num % 2 !== 0);
  return arrayOddNumbers;
}
console.log(onlyOddNumbers());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

console.log("--------------------------------------------------------ES9");
/* ESERCIZIO 9 (forEach)
Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("--------------------------------------------------------ES10");

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const contaFilm = (arrayFilm) => (sommaFilm = arrayFilm.length);

console.log("il numero totale di film è", contaFilm(movies));

console.log("--------------------------------------------------------ES11");
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const moviesClone = structuredClone(movies);
const onlyTitles = (arrayFilm) => arrayFilm.map((film) => film.Title);
console.log("ecco i titoli dei film", onlyTitles(moviesClone));

console.log("--------------------------------------------------------ES12");
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("tutti i film", movies);
const film2000 = (film) => film.filter((f) => parseInt(f.Year) >= 2000);
console.log("i film post-2000 sono", film2000(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const sumYears = (film) => film.reduce((acc, curr) => acc + parseInt(curr.Year), 0);
console.log(sumYears(movies));
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
