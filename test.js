const ALPHABET = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const reshapingAlphabet = (removedText, remainingText) => {
     remainingText.unshift(removedText);
     
     return remainingText.flat();
}

const shiftingAlphabet = (shiftNum) => {
    const removedText = ALPHABET.slice(-shiftNum);
    const remainingText = ALPHABET.slice(0, -shiftNum);

    return reshapingAlphabet(removedText, remainingText);
}

const indexOfAlphabet = (abc, letter) => {
    return abc == letter ? 
}

const convertEachWord = (word, shiftedAlphabet) => {
    const newWord = []
    const wordLetters = word.split("");

    for (const letter in wordLetters) {
        const alphabetIndex = ALPHABET.forEach((abc) => checkInAlphabet(abc, letter))  // return index of alpha
        newWord.push(shiftedAlphabet[alphabetIndex]);
    }

}

const decodedMessage = (text, shiftedAlphabet) => {
    const splitMessage = text.split(" ");

for (const word of splitMessage) {
    convertEachWord(word, shiftedAlphabet)
}

}


const encodeTwo = (textId, shiftNumId) => {
     // Get message + Shift Number
     // let text = document.getElementById(textId).value;
     // let shiftNum = document.getElementById(shiftNumId).value;
     shiftNum = parseInt(shiftNum);

     const shiftedAlphabet = shiftingAlphabet(shiftNum);
}