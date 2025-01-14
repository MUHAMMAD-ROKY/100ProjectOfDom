/**
 * project requirement:
 *change the background color by generating random rgb  color by clicking a button
 */

//steps:

//steps1: create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click',function(){
        const bgColor = generateRgb();
        root.style.backgroundColor = bgColor;
    })
}
//step2: random color generator function
function generateRgb(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return`rgb(${red},${green},${blue})`
}

//step3: collect all necessary references

//step4: handle the click event
