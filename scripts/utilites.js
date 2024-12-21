function hideElementById(elementId){
const element=document.getElementById(elementId)
element.classList.add('hidden')


}

function showElementById(elementId){

const element= document.getElementById(elementId)
element.classList.remove('hidden')

}

function getARandomAlphabet(){
const alphabetsString='abcdefghijklmnopqrstuvwxyz';
const alphabets=alphabetsString.split('');

const randomNumber= Math.random()*25;
const index= Math.round(randomNumber);
const alphabet=alphabets[index];
return alphabet;



}
function setBackgroundColor(elementId){
const element=document.getElementById(elementId)
element.classList.add('bg-orange-400');


}
function removeBackgroundColor(elementId){
const element=document.getElementById(elementId)
element.classList.remove('bg-orange-400')    
}
function getElementTextValueById(elementId){
const element= document.getElementById(elementId);
const elementText=(element.innerText); 
const value= parseInt(elementText);
return value;
}
function setElementTextById(elementId,value){
const element=document.getElementById(elementId);
element.innerText=value;


}
function getElementById(elementId){
    const element=document.getElementById(elementId)
    const text= element.innerText;
    return text;
}