function encode(Text, ShiftNum, code)
{
     let text = document.getElementById(Text).value
     let shiftNum = document.getElementById(ShiftNum).innerText
     shiftNum = parseInt(shiftNum)
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
                    else if((/[\W_]/).test(wordLetters[x]) == true){
                         newWord.push(wordLetters[x])
                         break
                    }
                    else if((/[0-9]/).test(wordLetters[x]) == true){
                         if(code == false){
                              let NewNum = (parseInt(wordLetters[x]) + parseInt(shiftNum))
                              if(NewNum > 9)NewNum -= 9
                              else if(NewNum < 0)NewNum += 9
                              newWord.push(NewNum)
                              break
                         }
                         if(code == true){ 
                              let NewNum = (parseInt(wordLetters[x]) - parseInt(shiftNum))
                              if(NewNum > 9) NewNum -= 9
                              else if(NewNum < 0) NewNum += 9
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
