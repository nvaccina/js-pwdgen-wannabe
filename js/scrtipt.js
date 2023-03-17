/*
1 Chiedi all’utente il suo nome,
2 Chiedi il suo cognome,
3 Chiedi il suo colore preferito,
4 Scrivi sulla pagina nomecognomecolorepreferito23
*/

const name = prompt("Inserisci il tuo nome");

const surname = prompt("Inserisci il tuo cognome");

const colore = prompt("Qual è il tuo colore preferito?");

const age = prompt("Quanti anni hai?");

const output = `
Ciao ${name} ${surname} <br>
Il tuo colore preferito è il ${colore} <br>
Hai ${age} anni
`
document.getElementById("utente").innerHTML = output;