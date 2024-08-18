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
let interval = 5000;

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

const contactForm = document.getElementById('contact-form'), contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_4554l6j','template_y2bap5l','#contact-form','i6-2MEpod0doCCabg' )
    .then(() =>{
        contactMessage.textContent = 'Email sent ✅'
        setTimeout(()=>{
           contactMessage.textContent = '' 
        }, 5000)

        contactForm.reset()

    }, ()=>{
        contactMessage.textContent = 'Email not sent error ❌'
    });
}

contactForm.addEventListener('submit', sendEmail)