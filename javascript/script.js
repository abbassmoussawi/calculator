// displaying the values on calculator screen 
function diplayValue(){
let buttons = document.querySelectorAll("button");
let equation='';
let result;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        equation += buttons[i].value;
        if(buttons[i].value =="c"){
            equation='';
            result = document.getElementById('screen').innerHTML = equation;
        }
        console.log(equation );
        result = document.getElementById('screen').innerHTML = equation;
    });
}

}

diplayValue();
