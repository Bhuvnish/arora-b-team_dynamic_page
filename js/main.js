

let bhuvnish = document.querySelectorAll('.button a'),
    lightBox = document.querySelector('#lightbox'),
    headline = lightBox.querySelector('.lb_heading'),
    bio = lightBox.querySelector('.lb_text');
;


function loadmyData() {
    

    lightBox.querySelector('h3').textContent = bhuvnish[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = bhuvnish[this.dataset.member].bio;

}

bhuvnish.forEach(hero => hero.addEventListener('click',loadmyData));


let audin = document.querySelectorAll('.button a'),
    lightBox1 = document.querySelector('#lightbox1')
   
;



function loadMyData() {
   

    lightBox.querySelector('h3').textContent = audin[this.dataset.member].headline;
    lightBox.querySelector('p').textContent = audin[this.dataset.member].bio;

}

audin.forEach(hero => hero.addEventListener('click',loadMyData));