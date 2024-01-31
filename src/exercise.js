
export function findLongerWord(phrase) {
    const words = phrase.split(/\s+/);

    let longestWord = '';
    let position = -1;

    // Iterar sobre cada palabra para encontrar la más larga
    words.forEach((word_cleaned, index) => {

        if (word_cleaned.length > longestWord.length) {
            longestWord = word_cleaned;
            position = index;
        }
    });

    const result = {
        word: longestWord,
        position: position,
    };

    console.log(`The largest word is "${result.word}" and it was found in the position ${result.position}.`);

}    
export function getCorrectValue(listOfValues) {
    const result = listOfValues.filter((value) => {
        return value !== undefined && 
        value !== null &&
        value !== 0 && 
        value !== false && 
        value !== true;
    });

    console.log(result);
}
export function filterDuplicatedNumbers(numberList) {

    const listOfNumbersToClean = numberList.flat(Infinity)
    const listOfNumbersCleaned = [...new Set(listOfNumbersToClean)]
    listOfNumbersCleaned.sort((a, b) => a - b)
    
    console.log(listOfNumbersCleaned);
}
/* Crear una función que cuenta cuántas veces se repite una palabra en un texto.*/
export function countRepeatedWords(phrase) {
    const words = phrase.split(/\s+/);
    const countWord = {}

    words.forEach((word) => {
        countWord[word] = (countWord[word] || 0) + 1
    })

    console.log(countWord)
    
}
/* Crear una función que determine si una palabra es palindrome. */
export function isPalindrome(word) {
   
    const cleanedWord = word.toLowerCase().replace(/\s/g, '');
    const reversedWord = cleanedWord.split('').reverse().join('');
    
    if (cleanedWord === reversedWord){
        return console.log(`The word "${word}" is palindrome.`);
    };
    console.log(`The word "${word}" is not palindrome.`)
  }