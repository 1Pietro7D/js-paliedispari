console.log("miao");
debugger;
// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// SOLUTION 1 PALINDROME
alert(
  returnPalindrome(prompt("inserisci una parola").toLocaleLowerCase().trim())
);

function returnPalindrome(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  if (word == reverseWord) {
    return "palindromo";
  } else {
    return "non è un palindromo";
  }
}
// Manca il controllo di inserire almeno una lettera altrimenti si rompe tutto
// SOLUTION 2 PALINDROME
function palindrome(word1) {
  let reversed = word1.split("").reverse().join("");
  console.log(reversed);
  return word1 === reversed ? "palindroma" : "non è palindroma";
}

const buttonPalindrome = document.getElementById("button-palindrome");
buttonPalindrome.addEventListener("click", function () {
  const textToAnalize = document.getElementById("palindrome-text").value;
  const result = document.createElement("span");
  result.innerText = palindrome(textToAnalize);
  document.getElementById("palindrome-contenitor").appendChild(result);
});

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let yourNumber;
while (isNaN(yourNumber)) {
  yourNumber = prompt("scegli il tuo numero");
}
let yourChoise;
const optionEven = "pari";
const optionOdd = "dispari";
if (yourChoise != optionEven) {
  console.log("eh si, siamo ancora diversi");
}
while (yourChoise !== optionEven && yourChoise !== optionOdd) {
  let input = prompt("scegli pari o dispari");
  yourChoise = input;

  if (yourChoise == optionEven || optionOdd) {
    console.log("eh si, proprio cosi sono uguali");
  }
}
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const random = Math.floor(Math.random() * 5) + 1;
// Sommiamo i due numeri.
const sum = yourNumber + random;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if (
  (sum % 2 == 0 && yourChoise == optionEven) ||
  (sum % 2 != 0 && yourChoise == optionOdd)
) {
  alert("hai vinto");
} else {
  alert("hai perso");
}
// Dichiariamo chi ha vinto.
