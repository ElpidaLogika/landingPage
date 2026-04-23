const theme = document.querySelector('.theme');
const gallery = document.querySelector('.gallery'); 
const greeting = document.querySelector('.greeting'); 

const foto1 = document.querySelector('.foto1');
const foto2 = document.querySelector('.foto2');
const foto3 = document.querySelector('.foto3');

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const about = document.querySelector('.about');
const categories = document.querySelector('.categories');

gallery.onclick = () => { 
    foto1.src = "img/coffee2.webp";
    foto2.src = "img/coffee3.jpg";
    foto3.src = "img/coffee1.jpg";
}

greeting.onclick = () => { 
    alert('Ласкаво просимо!');
}

theme.onclick = () => { 
    header.style.backgroundColor = "#171717";
    main.style.backgroundColor = "#212121";
    main.style.color = "#FFFFFF";
    footer.style.backgroundColor = "#171717";
    footer.style.color = "#FFFFFF";
    document.body.style.backgroundColor = "#414141";
    about.style.backgroundColor = "#2F2F2F";
    about.style.color = "#FFFFFF";
    categories.style.backgroundColor = "#2F2F2F";
    categories.style.color = "#FFFFFF";
}

