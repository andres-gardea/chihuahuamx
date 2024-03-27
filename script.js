/*Locomotive Scroll*/
const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal'
});

/*Animaciones entrada a la Pagina*/

const initAnimation = () => {
    gsap.timeline({ defaults: { ease: 'expo.inOut', stagger: 0.024 } })
        .from('.img_wrapper',
            {
                duration: 1.4,
                y: '100%',
                autoAlpha: 0,
            },
        );
};

initAnimation();

// /*Animaciones del Nav*/
// const tl = gsap.timeline({ paused: true });

// const animateOpenNav = () => {

//     tl.to(".nav-container", 0.2, {
//         x: '-33vw',
//         autoAlpha: 1,
//         delay: 0.1,
//     });

//     tl.to("#time-text, .logo-text", 0.2, {
//         color: "#e0e0e0",
//     },
//         "-+0.1");

//     tl.from(".social-links > div", 0.4, {
//         opacity: 0,
//         y: 10,
//         stagger: {
//             amount: 0.4,
//         },
//     });

//     tl.to(".contact-link > a", 0.8, {
//         top: 0,
//         ease: "power2.inOut",
//         stagger: {
//             amount: 0.4,
//         },
//     },
//         "-=0.4");

//     tl.from(".nav-footer", 0.3, {
//         opacity: 0
//     }, "-=0.5").reverse();
// };

// const openNav = () => {
//     animateOpenNav();
//     const navBtn = document.getElementById("menu-toggle-btn");
//     navBtn.onclick = function (e) {
//         navBtn.classList.toggle("active");
//         tl.reversed(!tl.reversed());
//     };
// };

// openNav();

const photoSection1 = document.querySelector('#scroll-section-1');
const photoSection2 = document.querySelector('#scroll-section-2');
const photoSection3 = document.querySelector('#scroll-section-3');
const photoSection4 = document.querySelector('#scroll-section-4');
const photoSection5 = document.querySelector('#scroll-section-5');
const photoSection6 = document.querySelector('#scroll-section-6');
const photoSection7 = document.querySelector('#scroll-section-7');
const photoSection8 = document.querySelector('#scroll-section-8');
const photoSection9 = document.querySelector('#scroll-section-9');
const photoSection10 = document.querySelector('#scroll-section-10');
const photoSection11 = document.querySelector('#scroll-section-11');

function SectionView1() {

    photoSection1.classList.toggle("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView2() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.toggle("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView3() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.toggle("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView4() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.toggle("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView5() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.toggle("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView6() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.toggle("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView7() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.toggle("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView8() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.toggle("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView9() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.toggle("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.remove("open-section");
}

function SectionView10() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.toggle("open-section");
    photoSection11.classList.remove("open-section");

}

function SectionView11() {

    photoSection1.classList.remove("open-section");
    photoSection2.classList.remove("open-section");
    photoSection3.classList.remove("open-section");
    photoSection4.classList.remove("open-section");
    photoSection5.classList.remove("open-section");
    photoSection6.classList.remove("open-section");
    photoSection7.classList.remove("open-section");
    photoSection8.classList.remove("open-section");
    photoSection9.classList.remove("open-section");
    photoSection10.classList.remove("open-section");
    photoSection11.classList.toggle("open-section");
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
