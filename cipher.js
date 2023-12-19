function encode(Text, ShiftNum)
{
     let text = document.getElementById(Text).value
     let shiftNum = document.getElementById(ShiftNum).innerText
     shiftNum = parseInt(shiftNum)
     let outPut = []

     const aplhabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
     
     let temp = aplhabetArray.slice(-shiftNum) // returns x y z
     let temp2 = aplhabetArray.slice(0, -shiftNum) // return a - w
     temp2.unshift(temp) 
     aplhabetArrayShifted = temp2.flat()
     //console.log(aplhabetArrayShifted)

     let wordsArr = text.split(" ")
     for(let i = 0; i < wordsArr.length; i++){
          //each letter of word
          let wordLetters = wordsArr[i].split("")
          let newWord = []
          for(x in wordLetters)
          {
               for(j in aplhabetArray)
               {
                    if(aplhabetArray[j] == wordLetters[x])
                    {
                         newWord.push(aplhabetArrayShifted[j])
                         break
                    }
                    else if(aplhabetArray[j] == wordLetters[x].toUpperCase)
                    {
                         newWord.push(aplhabetArrayShifted[j].toUpperCase)
                         break
                    }
                    else if(wordLetters[x] == "."){
                         newWord.push(".")
                         break
                    }
                    else if(wordLetters[x] == "?"){
                         newWord.push("?")
                         break
                    }
                    else if(wordLetters[x] == "!"){
                         newWord.push("!")
                         break
                    }
               }
          }
          newWord = newWord.join("")
          outPut.push(newWord)
     }
     outPut = outPut.join(" ")

     document.getElementById("coded-reply").innerText = outPut
}

function decode(Text, ShiftNum)
{
     let text = document.getElementById(Text).value
     text =  text.toLowerCase()
     let shiftNum = document.getElementById(ShiftNum).innerText
     shiftNum = parseInt(shiftNum)
     let outPut = []

     const aplhabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
     
     let temp = aplhabetArray.slice(+shiftNum) // returns x y z
     let temp2 = aplhabetArray.slice(0, +shiftNum) // return a - w
     temp2.unshift(temp) 
     aplhabetArrayShifted = temp2.flat()
     //console.log(aplhabetArrayShifted)

     let wordsArr = text.split(" ")
     for(let i = 0; i < wordsArr.length; i++){
          //each letter of word
          let wordLetters = wordsArr[i].split("")
          let newWord = []
          for(x in wordLetters)
          {
               for(j in aplhabetArray)
               {
                    if(aplhabetArray[j] == wordLetters[x])
                    {
                         newWord.push(aplhabetArrayShifted[j])
                         break
                    }
                    else if(wordLetters[x] == "."){
                         newWord.push(".")
                         break
                    }
                    else if(wordLetters[x] == "?"){
                         newWord.push("?")
                         break
                    }
                    else if(wordLetters[x] == "!"){
                         newWord.push("!")
                         break
                    }
               }
          }
          newWord = newWord.join("")
          outPut.push(newWord)
     }
     outPut = outPut.join(" ")

     document.getElementById("coded-reply").innerText = outPut
}

function changeShiftNum(Value)
{
     shiftNum = document.getElementById("shift-number").innerText
     shiftNum = Number(shiftNum)
     switch(Value){
          case "+":
               shiftNum ++
               document.getElementById("shift-number").innerText = shiftNum
               break;
          case "-":
               shiftNum --
               document.getElementById("shift-number").innerText = shiftNum
               break;
     }
}
// Original Alphabet
// Inputs ABC

// func -> Get index ABC 
// get shiftNumb [0,1,2]


// Create alphabet -> Shifted alphabet
// 012 inside shifted alphabet
// if abc[c] == aplhbet[i] shift[i]


// Original Alphabet
// A B C D E
// 1 2 3 4 5

// Original Index
// C E
// 3 5

// SHIFTED ALPHABET
// C D E A B
// 1 2 3 4 5

// Use Original Index to ouput shifted index
// E B
