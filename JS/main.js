const accordionBtnOpen = document.querySelector('.accordionBtnOpen')
const accordionBtnClose = document.querySelector('.accordionBtnClose')
const answered = document.querySelector('.answered')

const accordionBtnOpen1 = document.querySelector('.accordionBtnOpen1')
const accordionBtnClose1 = document.querySelector('.accordionBtnClose1')
const answered1 = document.querySelector('.answered1')

const accordionBtnOpen2 = document.querySelector('.accordionBtnOpen2')
const accordionBtnClose2 = document.querySelector('.accordionBtnClose2')
const answered2 = document.querySelector('.answered2')


accordionBtnOpen.addEventListener('click', function(){
    answered.style.display = "block"
    accordionBtnClose.style.display = 'block'
    accordionBtnOpen.style.display = 'none'
})

accordionBtnClose.addEventListener('click', function(){
    answered.style.display = "none"
    accordionBtnClose.style.display = 'none'
    accordionBtnOpen.style.display = 'block'
})


accordionBtnOpen1.addEventListener('click', function(){
    answered1.style.display = "block"
    accordionBtnClose1.style.display = 'block'
    accordionBtnOpen1.style.display = 'none'
})

accordionBtnClose1.addEventListener('click', function(){
    answered1.style.display = "none"
    accordionBtnClose1.style.display = 'none'
    accordionBtnOpen1.style.display = 'block'
})

accordionBtnOpen2.addEventListener('click', function(){
    answered2.style.display = "block"
    accordionBtnClose2.style.display = 'block'
    accordionBtnOpen2.style.display = 'none'
})

accordionBtnClose2.addEventListener('click', function(){
    answered2.style.display = "none"
    accordionBtnClose2.style.display = 'none'
    accordionBtnOpen2.style.display = 'block'
})