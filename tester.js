//testable copy of the cipher
function encode(Text, ShiftNum, code)
{
     let text = Text
     let shiftNum = parseInt(ShiftNum)
     shiftNum = shiftNum%26
     let outPut = []
     let temp
     let temp2

     const alphabetArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
     
     if(code == true)
     {
          temp = alphabetArray.slice(-shiftNum) // returns x y z
          temp2 = alphabetArray.slice(0, -shiftNum)// return a - w
     } 
     else if(code == false)
     {
          temp = alphabetArray.slice(+shiftNum) // returns x y z
          temp2 = alphabetArray.slice(0, +shiftNum)// return a - w
     } 
     
     temp2.unshift(temp) 
     alphabetArrayShifted = temp2.flat()

     let wordsArr = text.split(" ")
     for(let i = 0; i < wordsArr.length; i++){
          //each letter of word
          let wordLetters = wordsArr[i].split("")
          let newWord = []
          for(x in wordLetters)
          {
               for(j in alphabetArray)
               {
                    if(alphabetArray[j] == wordLetters[x])
                    {
                         newWord.push(alphabetArrayShifted[j])
                         break
                    }
                    else if((alphabetArray[j]).toUpperCase() == wordLetters[x])
                    {
                         newWord.push((alphabetArrayShifted[j]).toUpperCase())
                         break
                    }
                    else if((/[\W_]/).test(wordLetters[x]) == true)
                    {
                         newWord.push(wordLetters[x])
                         break
                    }
                    else if((/[0-9]/).test(wordLetters[x]) == true)
                    {
                         if(code == false)
                         {
                              let NewNum = (parseInt(wordLetters[x]) + parseInt(shiftNum))

                              console.log(`Initial New Number: ${NewNum}\nText Letter: ${wordLetters[x]}\nShift Number: ${parseInt(shiftNum)}`)

                              if(NewNum > 9 && NewNum < 20) NewNum -= 10
                              else if(NewNum < 0 && NewNum > -11) NewNum += 10
                              else if(NewNum < -9 && NewNum > -20) NewNum += 20
                              else if(NewNum < -19) NewNum += 30
                              else if(NewNum > 19) NewNum -= 20

                              console.log(`New Number: ${NewNum}\n`)


                              newWord.push(NewNum)
                              break
                         }
                         if(code == true)
                         { 
                              let NewNum = (parseInt(wordLetters[x]) - parseInt(shiftNum))
                              if(NewNum > 9 && NewNum < 20) NewNum -= 10
                              else if(NewNum < 0 && NewNum > -11) NewNum += 10
                              else if(NewNum < -9 && NewNum > -20) NewNum += 20
                              else if(NewNum < -19) NewNum += 30
                              else if(NewNum > 19) NewNum -= 20
                              newWord.push(NewNum)
                              break
                         }
                         
                    }
               }
          }
          newWord = newWord.join("")
          outPut.push(newWord)
     }
     outPut = outPut.join(" ")

     console.log(outPut)
     return outPut
}
encode("abcde", "2", true)
encode("cdeab", "2", false)



module.exports = encode;