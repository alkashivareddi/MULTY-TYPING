const span = document.querySelector('span')

const wordList = ['Developer','Coder', 'Teacher','Dancer']


let wordIndex = 0
let characterIndex = 0
let reversType = false


const intervalId = setInterval(()=>{
    if (!reversType){
     span.innerText=span.innerText + wordList[wordIndex][characterIndex]
     characterIndex++ 
    }else{
     span.innerText = span.innerText.slice(0,span.innerText-1)
    }
    if(characterIndex ===wordList[wordIndex].length){
        reversType = true
    }
    
    if(span.innerText.length ===0 && reversType){
        reversType = false
        characterIndex = 0
        wordIndex++
    }
    
    
    if(wordIndex===wordList.length){
        wordIndex=0
    }



},200)