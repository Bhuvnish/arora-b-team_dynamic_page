let junish = document.querySelectorAll('.button a'),
    lightBox = document.querySelector('#lightbox')
;


function loadMyData() {
    //debugger;

    lightBox.querySelector('h3').textContent = junish[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = junish[this.dataset.member].bio;

}

junish.forEach(hero => hero.addEventListener('click',loadMyData));


let logan = document.querySelectorAll('.button a'),
    lightBox1 = document.querySelector('#lightbox1')
;


function loadMyData() {
    //debugger;

    lightBox.querySelector('h3').textContent = logan[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = logan[this.dataset.member].bio;

}

logan.forEach(hero => hero.addEventListener('click',loadMyData));