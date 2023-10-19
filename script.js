
// console.log(moonLanding.getFullYear());
// const moonLanding = new Date('July 20, 2023 00:20:18');


let inputs = document.querySelectorAll('input');
let calcBtn = document.querySelector('.img');

let dif_year = document.getElementById('dif_year');
let dif_month = document.getElementById('dif_year');
let dif_day = document.getElementById('dif_year');

let dif_year_log= document.getElementById('dif_year_lg')
let dif_month_log= document.getElementById('dif_month_lg')
let dif_day_log= document.getElementById('dif_days_lg')

calcBtn.addEventListener('click',()=>{
    let times=[];
    inputs.forEach((el=>{
        times.push(el.value);
    }))
    let time = new Date(times[0],times[1],times[2]);
    
    time.setDate(times[0])
    time.setMonth(times[1]-1)
    time.setFullYear(times[2])
   let farq =(Date.now()-time);
   let farq_time = new Date(farq)
   
    dif_year = farq_time.getFullYear();
    dif_month = farq_time.getMonth();
    dif_day = farq_time.getDate();
    // console.log("yil+",dif_year-1970)
    // console.log("oy+",dif_month)
    // console.log("kun+",dif_day-1)
    dif_year_log.textContent = `${dif_year-1970}`
    dif_month_log.textContent = `${dif_month}`
    dif_day_log.textContent = `${dif_day-1}`
})



