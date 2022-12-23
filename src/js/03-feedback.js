import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");
const inputEl = formEl.querySelector("input");
const messageEl = formEl.querySelector("textarea");

const KEY_LOCAL = "feedback-form-state";
formEl.addEventListener("submit", onFormReset)
inputEl.addEventListener("input", throttle(onInputFillField, 500));
messageEl.addEventListener("input", throttle(onInputFillField, 500));
checkInput()




function onInputFillField() {
    localStorage.setItem(KEY_LOCAL, JSON.stringify({name: inputEl.value, message: messageEl.value}))
}



function checkInput() {
    const savedInputValues = JSON.parse(localStorage.getItem(KEY_LOCAL));
    if (savedInputValues) {
        inputEl.value = savedInputValues.name;
        messageEl.value = savedInputValues.message
    }
} 

function onFormReset(e) {
    e.preventDefault();
     console.log(JSON.parse(localStorage.getItem(KEY_LOCAL))); 
     e.currentTarget.reset();
    localStorage.removeItem(KEY_LOCAL);
   
}



