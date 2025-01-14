/**
 * project requirement:
 *change the background color by generating random hexadecimal  color by the following  clicking a button
 *also display the hex code to a disabled  input field
 */

//steps:

//steps1: create onload handler
window.onload = () =>{
    main();
};
function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click',function(){
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
}

//step2: random color generator function
function generateHexColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//step3: collect all necessary references

//step4: handle the click event
