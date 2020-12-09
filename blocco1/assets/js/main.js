//snacks blocco 1
//!1) utente inserisce due numeri in successione, il software stampa il numero maggiore.
/**
 * funzione che paragona due numeri e ritorna quello più grande con un alert.
 * //@param {number} numb1 
 * //@param {number} numb2 
 */
// const egualNumbers = (numb1, numb2) =>{
// if (numb1 > numb2 ) {
//     alert(`il numero più grande é: ${numb1}`)
// } else if (numb1 < numb2) {
//     alert(`il numero più grande é: ${numb2}`)
// } else {
//     alert('sono numeri uguali!')
// }
// }
// let primoNumero = Number(prompt('Inserisci il primo numero'));
// let secondoNumbero = Number(prompt('inserisci il secondo numero'));
// egualNumbers(primoNumero, secondoNumbero);

//! 2)inserire due parole, il software stampa prima la parola più lunga e poi la più corta
/**
 * arrow function che chiede due parole e restituisce prima quella più lunga e poi quella più corta.
 * //@param {string} string 
 * //@param {string} string 
 */
// const parole = (string, string2) =>{
//  if (string.length > string2.length) {
//      console.log(string);
//      console.log(string2);
//  } else if (string.length < string2.length) {
//      console.log(string2);
//      console.log(string);
//  } else{
//      console.log(`${string} e ${string2} sono lunghe uguali`);
//  }
// }
// let parolaUno = prompt('inserisci la prima parola');
// let parolaDue = prompt('inserisci la seconda parola');

// let risultato = parole(parolaUno, parolaDue);
// console.log(risultato);
//!chiedere 5 numeri all'utente, il programma stampa la somma dei numeri, esegui questo programma con il for e con il while

//TODO arrow function ciclo for
// let arrayVuoto = [];
/**
 * somma di numeri inseriti dall'untente messa in un array usando il ciclo for
 *  //@param {array} array 
 */
// const newFunction = (array) => {
//     sum = 0;
//     for (let i = 0; i < 5; i++) {
//         const element = array[i];
//         let numeriUtente = Number(prompt('dammi un numero'));
//         array.push(numeriUtente);
//         sum = sum + numeriUtente;
//     }
//     return sum;
// }
// let risultato = newFunction(arrayVuoto);
// console.log(risultato);

//TODO arrow fucntion ciclo while
// let whileArray = [];
/**
 * somma numeri richiesti utente con ciclo while e arrow function
 * //@param {array} array 
 */
// const sommaWhile = (array) => {
//     let counter = 0;
//     let somma = 0;
//     while (counter < 5) {
//         let numeriUtente = Number(prompt('dammi un numero'));
//         array.push(numeriUtente);
//         somma+= numeriUtente;
//         counter++;
//     };
//     return somma;
// };
// let risultatoWhile = sommaWhile(whileArray);
// console.log(risultatoWhile);

//!3) In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//arrow function