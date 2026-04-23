const theme = document.querySelector('.theme');
const gallery = document.querySelector('.gallery'); 
const greeting = document.querySelector('.greeting'); 

const foto1 = document.querySelector('.foto1');
const foto2 = document.querySelector('.foto2');
const foto3 = document.querySelector('.foto3');

gallery.onclick = () => { 
    foto1.src = "img/coffee2.webp";
    foto2.src = "img/coffee3.jpg";
    foto3.src = "img/coffee1.jpg";
}

greeting.onclick = () => { 
    alert('Ласкаво просимо!');
}

theme.onclick = () => { 
    document.querySelector('header').style.backgroundColor = "#171717";
}

