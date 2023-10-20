
// console.log(moonLanding.getFullYear());
// const moonLanding = new Date('July 20, 2023 00:20:18');


let inputs = document.querySelectorAll('input');
let calcBtn = document.querySelector('.img')

let output_year = document.getElementById('dif_year_lg');
let output_month = document.getElementById('dif_month_lg');
let output_days = document.getElementById('dif_days_lg');

let userData = new Date();


calcBtn.addEventListener('click', () => {
    let input_array = [];
    let start = new Date();
    let realTime = new Date(1996, 10, 10);
    let birthday = new Date(1995, 11, 17);
    inputs.forEach((el) => {
        input_array.push(el.value)
    })
    
    output_year.textContent = start.getFullYear() - input_array[2]
    output_month.textContent = start.getMonth() - input_array[1]+1
    output_days.textContent = start.getDate() - input_array[0]


})



