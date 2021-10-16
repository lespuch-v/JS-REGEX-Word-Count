const textArea = document.querySelector("#myForm")
const countWords = document.querySelector("#word")
const longestWord = document.getElementById("longestWord")
const numberCount = document.getElementById("numbersCount")
let countLetters = document.querySelector("#letters")
let myWords 




// RegEx
const regexStr = /([a-z]|[A-Z]|[0-9]|["-'()*,@^_+`~.:…;?`"])+/g
const regexNum = /[\+?\d+]/g




textArea.addEventListener("input", ()=>{
    let myWords = textArea.value
    const foundWords = myWords.match(regexStr)
    const foundNums = myWords.match(regexNum)
    const joinedArr = foundWords.join(" ").length
    countLetters.innerText = `Letter Count / spaces: ${joinedArr} (${joinedArr - foundWords.length + 1})`
    countWords.innerText = `Word Count: ${foundWords.length}`
    longestWord.innerText =`The Longest Word: ${data(myWords)} (${data(myWords).length})`
    numberCount.innerText = `Number count: ${foundNums.length}`
    
})

// get the longest word
function data(str){
    let show = str.split(" ");
     show.sort(function (a,b){
         return b.length - a.length; 
     })
     return show[0];
}


