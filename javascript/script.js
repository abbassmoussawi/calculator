let buttons = document.querySelectorAll("button");
let equation = '';
let result;
let term1;
let term2;
let opeartorPosition;

function diplayValue() {
    //loop through all the class 'button'
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {

            //clear the screen
            if (buttons[i].value == "c") {
                equation = '';
                document.getElementById('screen').innerHTML = equation;
            } else if (buttons[i].value === '=') {
                document.getElementById('screen').innerHTML = eval(equation);
                equation =eval(equation);
                console.log(equation, typeof equation);
            } else if (buttons[i].value === '←') {
              if (typeof equation =='string'){
                equation = equation.slice(0, equation.length -1);
                document.getElementById('screen').innerHTML = equation;
              }else{
                // document.getElementById('screen').innerHTML = 'asss';
                console.log('Ther\'s nothing to remove, please press Clear button and make a new equation');
              }
            }else {
                equation += buttons[i].value;
                document.getElementById('screen').innerHTML = equation;

            }

        }
        )
    };
}

diplayValue();

