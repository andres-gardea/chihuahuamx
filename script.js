/*Locomotive Scroll*/
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal'
});

scroll.on('scroll', () => {
    const windowW = window.innerWidth;

    document.querySelectorAll('.fade').forEach(el => {
        const rect = el.getBoundingClientRect();

        let opacity = 1;


        if (rect.left > 0 && rect.left < windowW) {
            const distanceFromRight = rect.left; // mientras más cerca de 0, más visible
            opacity = 1 - (distanceFromRight / windowW);
        }

        if (rect.right > 0 && rect.right < windowW) {
            const distanceFromLeft = rect.right; // mientras más cerca de 0, menos visible
            opacity = distanceFromLeft / windowW;
        }

        opacity = Math.pow(opacity, 3);

        el.style.opacity = opacity;
    });
});


/*Animaciones entrada a la Pagina*/

// const initAnimation = () => {
//     gsap.timeline({ defaults: { ease: 'expo.inOut', stagger: 0.024 } })
//         .from('.img_wrapper',
//             {
//                 duration: 1.4,
//                 y: '100%',
//                 autoAlpha: 0,
//             },
//         );
// };
// initAnimation();

gsap.to(".logo-zone, .weather-zone", {
    opacity: 1,
    top: "0",
    ease: "power3.inOut",
    duration: 1.4,
    delay: .1,
    stagger: 0.1,
});

gsap.to(".footer-text", {
    opacity: 1,
    top: "0",
    ease: "power3.inOut",
    duration: 1.4,
    delay: .1,
});

gsap.to("#scroll-first", {
    scale: 1,
    opacity: 1,
    ease: "power3.inOut",
    duration: 1.2,
    delay: .2
});


const photoSections = document.querySelectorAll('[id^="scroll-section-"]');

function SectionView(sectionIndex) {
    // 2. Iterar sobre todas las secciones
    photoSections.forEach((section, index) => {
        if (index === sectionIndex) {

            section.classList.toggle("open-section");
        } else {
            section.classList.remove("open-section");
        }
    });
}



/*Reloj*/
var ChihuahuaTime = function () {
    document.getElementById("time-text").innerHTML = new Date().toLocaleString("en-US", { timeZone: "America/Chihuahua", timeStyle: "medium" })
}

ChihuahuaTime();
setInterval(ChihuahuaTime, 1000);


/*Clima*/
window.addEventListener('load', () => {

    let temperaturaValor = document.getElementById('temperature-text')
    let temperaturaDescripcion = document.getElementById('temperature-desc')

    const url = `https://api.openweathermap.org/data/2.5/weather?id=4014338&appid=6639b3c56b4258686b4ae9d53093da35&lang=es`

    fetch(url)
        .then(response => { return response.json() })
        .then(data => {

            let temp = Math.round(data.main.temp)
            temperaturaValor.textContent = `${temp} ° C`

            let desc = data.weather[0].description
            temperaturaDescripcion.textContent = desc.toUpperCase()

        })
        .catch(error => {
            console.log(error)
        })

})
