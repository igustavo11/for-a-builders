
let menu = document.querySelector('#menu-bar');
let navbar= document.querySelector('.navbar');
let picBtn= document.querySelectorAll('.pic-btn');

window.addEventListener("scroll", function (){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)

});

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
   });


picBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('img-src')
        document.querySelector('#img-slider').src = src

    });

});

// counters homepage


let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

valueDisplays.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue +=1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }

    }, duration);
});


// portifolio metodo
const images = [
    'https://via.placeholder.com/600x400?text=Casa+1',
    'https://via.placeholder.com/600x400?text=Casa+2',
    'https://via.placeholder.com/600x400?text=Casa+3',
    'https://via.placeholder.com/600x400?text=Casa+4',
    'https://via.placeholder.com/600x400?text=Casa+5'
];

const showAllHousesButton = document.getElementById('showAllHouses');
const showHouse1Button = document.getElementById('showHouse1');
const showHouse2Button = document.getElementById('showHouse2');
const showHouse3Button = document.getElementById('showHouse3');
const showHouse4Button = document.getElementById('showHouse4');
const showHouse5Button = document.getElementById('showHouse5');
const portfolioDiv = document.getElementById('portfolio');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;
let currentImages = []; 

function showImages(imagesToShow) {
    portfolioDiv.innerHTML = '';
    imagesToShow.forEach((image, index) => {
        const imgElement = `<img src="${image}" alt="Imagem da Casa" class="house-image" data-index="${index}">`;
        portfolioDiv.innerHTML += imgElement;
    });
    currentImages = imagesToShow; 
    addImageClickListener();
}

function addImageClickListener() {
    const houseImages = document.querySelectorAll('.house-image');
    houseImages.forEach(image => {
        image.addEventListener('click', () => {
            currentIndex = parseInt(image.getAttribute('data-index'));
            showModal(currentIndex);
        });
    });
}

function showModal(index) {
    modalImage.src = currentImages[index]; 
    modal.style.display = 'flex';
}

function updateModalImage(index) {
    modalImage.src = currentImages[index]; 
}

showAllHousesButton.addEventListener('click', () => {
    showImages(images);
});

showHouse1Button.addEventListener('click', () => {
    showImages(images);
});

showHouse2Button.addEventListener('click', () => {
    showImages([images[1]]);
});

showHouse3Button.addEventListener('click', () => {
    showImages([images[2]]);
});

showHouse4Button.addEventListener('click', () => {
    showImages(images);
});

showHouse5Button.addEventListener('click', () => {
    showImages([images[4]]);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentImages.length - 1; 
    updateModalImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < currentImages.length - 1) ? currentIndex + 1 : 0; 
    updateModalImage(currentIndex);
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
