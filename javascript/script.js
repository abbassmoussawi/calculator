// displaying the values on calculator screen 
function diplayValue() {
    let buttons = document.querySelectorAll("button");
    let equation = '';
    let result;
    //loop through all the class 'button'
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            equation += buttons[i].value;
            //clear the screen
            if (buttons[i].value == "c") {
                equation = '';
                result = document.getElementById('screen').innerHTML = equation;
            }
            //display the
            console.log(equation);
            result = document.getElementById('screen').innerHTML = equation;
        });
    }
}
diplayValue();
