
// Daily Challenge: Letters

/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: Show Only The Letters
 * Date : 05/01/2023
 */


/* 1 Create an input type text that 
takes/shows only letters. (ie. numbers and special characters won’t be accepted) */

// we create a form
let createForm=document.createElement('form')

//We append the form to body
document.body.appendChild(createForm)
//We create a input element and give his attributes type id placeholder
let createInput=document.createElement('input')
createInput.setAttribute("type","text")
createInput.setAttribute("id","userInput")
createInput.setAttribute("placeholder","Just only letters")
//We append to form 
createForm.appendChild(createInput)


//2 use one of the following events to remove any character that is not a letter 


// we create a var to take the input
let takeinput=document.getElementById('userInput')

// we create a addEventListener keydown because with keyup if the user dont leave the key it does'nt work well
takeinput.addEventListener('keydown',CheckiSLetter)

// we create function CheckiSLetter
function CheckiSLetter(e){
// We check the the keycode of each letter for char is between 65 et 90 
    if(!(e.keyCode >= 65 && e.keyCode <=90) ){
        e.preventDefault()
    }
}
