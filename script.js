const buttonMultiplication = document.querySelector('.btn-multiplication');
const buttonDivision = document.querySelector('.btn-division');
const input = document.querySelector('#input');
const result = document.querySelector('#result');

let num = 50
result.innerText = num
buttonMultiplication.addEventListener('click', () => {
    num *= 2
    result.innerText = num
})

buttonDivision.addEventListener('click', () => {
    num /= 10
    result.innerText = num
})



input.addEventListener('input', (event )  => {
    console.log(event.target.value);
})
console.log(document.body);


// window.addEventListener('mousemove', (event) => {
//     console.log(event.clientX, event.clientY)
// })


//