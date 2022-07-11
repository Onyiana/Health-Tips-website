const accordionBtn = document.querySelectorAll('.accordionBtn')

accordionBtn.forEach(element => {
    element.addEventListener('click', function(){
        const id = element.getAttribute('id')
        const ansClass = `answered${id}`
        console.log(ansClass)
        const answered = document.getElementById(ansClass)
        if (answered.style.display == 'none') {
            element.innerHTML = '<i class="accordionBtn" id="1"><button style="cursor: pointer;">Open</button></i>'
            answered.style.display = 'block'
        }
        else {
            element.innerHTML = '<i class="accordionBtn" id="1"><button style="cursor: pointer;">Close</button></i>'
            answered.style.display = 'none'
        }
});