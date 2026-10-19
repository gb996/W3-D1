/*
  REGOLE
  - Le risposte vanno scritte in JavaScript sotto ogni commento.
  - Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
  - In alternativa: nel terminale, `node script.js`.
  - Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const utenti = [
	{
		id: 1,
		nome: 'Antonio',
		cognome: 'Rossi',
		eta: 28,
		utente: 'Milano',
	},
	{
		id: 2,
		nome: 'Anna',
		cognome: 'Bianchi',
		eta: 35,
		utente: 'Roma',
	},
	{
		id: 3,
		nome: 'Luca',
		cognome: 'Verdi',
		eta: 17,
		utente: 'Milano',
	},
	{
		id: 4,
		nome: 'Sara',
		cognome: 'Neri',
		eta: 17,
		utente: 'Torino',
	},
	{
		id: 5,
		nome: 'Marco',
		cognome: 'Gialli',
		eta: 45,
		utente: 'Roma',
	},
	{
		id: 6,
		nome: 'Chiara',
		cognome: 'Rosa',
		eta: 30,
		utente: 'Milano',
	},
];

/* ESERCIZIO 1 — Arrow function compatta
   Riscrivi questa funzione come arrow function in forma compatta:
     function quadrato(n) { return n * n; }
   Chiamala con quadrato(5) e stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const quadrato = n => {
	return n * n;
}

console.log(quadrato(5));

/* ESERCIZIO 2 — Destructuring di oggetto
   Crea un oggetto "persona" con almeno 4 properties (es. nomeutente).
   Estrai 3 properties in 3 variabili usando destructuring.
   Stampa le 3 variabili.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const persona = {
  nome: "Luca",
  cognome: 'Clemente',
  eta: 30,
  citta: 'Londra'
};

const {nome , cognome , eta}= persona;

console.log(nome);
console.log(cognome);
console.log(eta);
console.log(persona );


/* ESERCIZIO 3 — Destructuring nei parametri
   Scrivi una arrow function "riepilogo" che riceve un utente e ritorna
   "Nome Cognome (eta anni)" usando destructuring nei parametri.
   Chiamala su utenti[0], utenti[1], utenti[2] e stampa i 3 risultati.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const riepilogo = ({ nome, cognome, eta }) => `${nome} ${cognome} (${eta} anni)`;

console.log(riepilogo(utenti[0]));
console.log(riepilogo(utenti[1]));
console.log(riepilogo(utenti[2]));
console.log(riepilogo(utenti[0, 1, 2]));

/* ESERCIZIO 4 — Spread su array
   Crea numeri = [1, 2, 3].
   Crea una copia indipendente con spread, fai push(99) sulla copia.
   Stampa originale e copia per dimostrare che l'originale non è cambiato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeri = [1, 2, 3];
const numeri2 = [...numeri];
numeri2.push(99);

console.log(numeri);
console.log(numeri2);

/* ESERCIZIO 5 — Spread per concatenare
   frutti  = ["mela", "banana"]
   verdure = ["carota", "spinaci"]
   Crea cibo che li unisca con spread. Stampalo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

frutti  = ["mela", "banana"];
verdure = ["carota", "spinaci"];

const cibo = [frutti , ...verdure];
console.log(cibo);

const cibo2 = [...frutti, ...verdure];
console.log(cibo2);

/* ESERCIZIO 6 — Spread su oggetto
   prodotto = { nome: "Cuffie", prezzo: 79.99 }
   Crea un nuovo oggetto con "disponibile: true" aggiunto, senza modificare prodotto.
   Stampa il nuovo oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
prodotto = { nome: "Cuffie", prezzo: 79.99 }; 
nuovoProdotto = { ...prodotto, disponibile: true };
console.log(nuovoProdotto);

/* ESERCIZIO 7 — forEach
   Stampa tutti gli utenti nel formato "utente)".
   Esempio: "- Mario Rossi (Milano)"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

utenti.forEach((utente) => {
	console.log(`- ${utente.nome} ${utente.cognome} (${utente.utente})`);
});

 

/* ESERCIZIO 8 — map a stringhe
   Usa map per creare nomiCompleti = ["Mario Rossi", "Anna Bianchi", ...].
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const nomiCompleti = utenti.map((utente) => `${utente.nome} ${utente.cognome}`);
console.log(nomiCompleti);

/* ESERCIZIO 9 — map a oggetti
   Usa map per creare utentiPlus: array di oggetti dove ogni utente ha tutte
   le properties originali + una nuova property "descrizione" con valore
utente".
   Suggerimento: usa spread per copiare le properties esistenti.
   Stampa il primo elemento di utentiPlus.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const utentiPlus = utenti.map((utente) => ({
	...utente,
	descrizione: `${utente.nome} ${utente.cognome}`
}));

console.log(utentiPlus[0]);

/* ESERCIZIO 10 — filter attivi
   Usa filter per ottenere solo gli utenti con attivo: true.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11 — filter combinato
   Usa filter per ottenere solo gli utenti maggiorenni (eta >= 18) che vivono a Milano.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12 — find
   Usa find per trovare il primo utente con id === 4.
   Stampa l'oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13 — reduce
   a) Usa reduce per calcolare l'età media (somma età / numero utenti). Stampa.
   b) Usa reduce per contare il numero di utenti attivi. Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14 — sort
   a) Ordina gli utenti per eta crescente. Stampa l'array di nomi nell'ordine.
   b) Ordina gli utenti per nome alfabeticamente. Stampa l'array di nomi nell'ordine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15 — Chaining
   Componi una catena di metodi che:
   - filtra gli utenti attivi
   - trasforma in array di stringhe "Nome Cognome"
   - ordina alfabeticamente
   Stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
