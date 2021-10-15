const textArea = document.querySelector("#myForm")
const countWords = document.querySelector("#word")
let countLetters = document.querySelector("#letters")
let myWords 


textArea.addEventListener("keydown", ()=>{
    let letterCount = textArea.value
    let myWords = textArea.value
    myWords.split(" ").length
    countLetters.innerText = `Letter Count: ${letterCount.length}`
    countWords.innerText = `Word Count: ${myWords.split(" ").length}`
})






