const hamburger = document.getElementById('hamburger')
const close = document.querySelector('.fa-close')
const hidedDivs = document.querySelectorAll(".hided")

hamburger.addEventListener('click', ()=>{
    hidedDivs.forEach(div=>{
        div.classList.add('appear')
    })
})
close.addEventListener('click', ()=>{
    hidedDivs.forEach(div=>{
        div.classList.remove('appear')
    })
})
