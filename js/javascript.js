console.log("miao");

// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// SOLUTION 1 PALINDROME
alert(returnPalindrome(prompt("inserisci una parola")));

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
const textToAnalize = document.getElementById("palindrome-text").value;

function palindrome(word1) {
  const reversed = word1.split("").reverse().join("");

  return word1 === reversed ? "palindroma" : "non è palindroma";
}
const buttonPalindrome = document.getElementById("button-palindrome");
buttonPalindrome.addEventListener("click", function () {
  const result = document.createElement("span");
  result.innerText = palindrome(textToAnalize);
  document.getElementById("palindrome-contenitor").appendChild(result);
});

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
