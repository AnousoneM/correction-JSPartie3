// Bcp des réponses se trouvent ici :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toString
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math
// Bonne lecture : Go Application !!

//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  let result = sentence.length;
  return result;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  return sentence.replace('e',' ');
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  return firstSentence.concat(secondSentence);
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  return sentence.substring(4,5);
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  return sentence.substring(0,9);
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  return sentence.toUpperCase();
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  return sentence.toLowerCase();
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  return sentence.trim();
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  return typeof(sentence) == 'string';
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  // return fileName.substring(fileName.indexOf('.') + 1); // Permet d'avoir l'extension en fonction du point :)
  // return fileName.split('.').pop() // Permet d'obtenir le dernier élément du tableau
  return fileName.slice(-3); // attention ne fonctionne uniquement avec des extensions en 3 lettres
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  // return sentence.split(' ').length - 1; // Version permettant de transformer un string en array en prenant comme paramètre ' '. Puis de compter.
  return sentence.match(/ /g).length; // on cherche la pattern ou modèle compris entre les '2 /' le g permet de ne pas s'arrêter à la première occurance. 
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  return sentence.split('').reverse().join('');
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  // return sentence.indexOf('La Manu') >= 0; // Version avec indexOf, si aucune correspondance retournera un -1
  return sentence.includes('La Manu'); // retourne true si la correspondance est trouvée
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  return Math.abs(number);
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  return numbersArray.map(Math.abs);
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arrondir à l'entier le plus proche.
let calculateArea = function (radius) {
  return Math.round(Math.PI * Math.pow(radius, 2));
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  // return Math.floor(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))); // Version calcul mathématique :)
  return Math.floor(Math.hypot(a,b)); // Version avec la fonction JS !!! ;)
}
