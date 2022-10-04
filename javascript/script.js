let buttons = document.querySelectorAll("button");
let equation='';
let result;
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        equation += buttons[i].value;
        console.log(equation );
        result = document.getElementById('screen').innerHTML = equation;
    });
}

