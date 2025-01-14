/**
 * project requirement:
 *change the background color by generating random hexadecimal  color by the following  clicking a button
 *also display the hex code to a disabled  input field
 *add a button to copy the color code
 *
 */

//steps:

//steps1: create onload handler
window.onload = () =>{
    main();
};
function main(){
    const root = document.getElementById('root');
    const changeBtn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const copyBtn = document.getElementById('copy-btn');


    changeBtn.addEventListener('click',function(){
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    copyBtn.addEventListener('click',function(){
        window.navigator.clipboard.writeText(output.value);
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

//step4: handle the  change button click event

//step5: handle the copy button click event
