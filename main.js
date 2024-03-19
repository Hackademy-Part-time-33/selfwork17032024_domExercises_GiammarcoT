// TRACCIA 1

let btn_color = document.querySelector('#btn_color');
let btn_bold = document.querySelector('#btn_bold');
let btn_display = document.querySelector('#btn_display');
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let paragraphs = document.querySelectorAll('.paragraphs');


btn_color.addEventListener('click', () =>{
    let r = Math.floor(Math.random() * (256 - 0));
    let g = Math.floor(Math.random() * (256 - 0));
    let b = Math.floor(Math.random() * (256 - 0));
    let r2 = Math.floor(Math.random() * (256 - 0));
    let g2 = Math.floor(Math.random() * (256 - 0));
    let b2 = Math.floor(Math.random() * (256 - 0));
    let r3 = Math.floor(Math.random() * (256 - 0));
    let g3 = Math.floor(Math.random() * (256 - 0));
    let b3 = Math.floor(Math.random() * (256 - 0));
    
// applicare colori separatamente ai paragrafi
    p1.style.color = `rgb(${r}, ${g}, ${b})`;
    p2.style.color = `rgb(${r2}, ${g2}, ${b2})`;
    p3.style.color = `rgb(${r3}, ${g3}, ${b3})`;
});

// applicare bold ai paragrafi
btn_bold.addEventListener('click', () =>{
    paragraphs.forEach(p => {
        p.classList.toggle('bold')
    });
});

// applicare display: none ai paragrafi
btn_display.addEventListener('click', () =>{
    paragraphs.forEach(p => {
        p.classList.toggle('display')
    });
});
