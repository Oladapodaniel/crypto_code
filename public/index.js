// Toggle nav on mobile
let hamburger = document.getElementById("hamburger");
let closeNav = document.querySelector(".close-nav");
let navItems = document.querySelector(".nav-items");
hamburger.addEventListener('click', function () {
    navItems.classList.replace("hidden", "block")
})
closeNav.addEventListener('click', function () {
    navItems.classList.replace("block", "hidden")
})
console.log(hamburger)














// import { gsap } from "gsap";
// const gsap = require('gsap')
// const { gsap } = require("gsap/dist/gsap");
// gsap.default()

// gsap.to('.star', {x: 75, rotation: 360, fill: "yellow", duration: 3, stagger: 1})
// console.log('hereee');
// gsap.registerPlugin(ScrollTrigger)

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.scrolltrigger',
//         toggleActions: 'restart pause reverse pause',
//         // start: "center center",
//         // end: "50px 50px",
//         markers: true,
//         scrub: 2
//     }
// })
// // const tl2 = gsap.timeline({
// //     scrollTrigger: {
// //         trigger: '.bb',
// //         toggleActions: 'restart pause reverse pause',
// //         // start: "center center",
// //         // end: "50px 50px",
// //         markers: true,
// //         scrub: 2
// //     }
// // })

// tl.from(".scrolltrigger", {
//     duration: 1, 
//     x: 100, 
//     y: 100, 
//     opacity: 0,
//     ease: 'back.out'
// })
// tl.to('.scrolltrigger', {
//     duration: 1, 
//     scaleX: 1.5,
//     ease: 'none',
//     backgroundColor: 'orange'
// })
// .to('.scrolltrigger', {
//     duration: 1, 
//     translateX: 180,
//     x: 0,
//     y: 0
// })
// .to('.bb', {
//     duration: 1, 
//     x: 180,
//     rotate: 360
// })


// Toggle actions
// play, pause, resume, reverse, restart, reset, complete, none

// gsap.to('.box', {
//     y: 100,
//     backgroundColor: 'yellow',
//     duration: 2,
//     rotate: 360,
//     scale: 1.5,
//     ease: 'back.in',
//     repeat: -1,
//     yoyo: true,
//     stagger: 0.1
// })


// const tl2 = gsap.timeline();

// tl2.to(".orange", {
//     duration: 0.9,
//     xPercent: 200,
//     backgroundColor: 'green'
// })
// .from(".orange", {
//     duration: 0.9,
//     rotate: 100
// })
// .from(".orange", {
//     // duration: 0.009,
//     yPercent: 100
// })

// ScrollTrigger.create({
//     animation: tl2,
//     trigger: '.anime',
//     start: "center center",
//     end: '+=500',
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: true
// })


// let boxes = document.querySelectorAll('.box')
// let bxs = gsap.utils.toArray(".box").forEach((panel, index) => {
//     gsap.to('.box', {
//         // x: 100,
//     // rotate: 360,
//     // scale: 1.5,
//     // ease: 'back.in',
//     scrollTrigger: {
//         trigger: panel,
//         toggleActions: 'restart pause reverse pause',
//         start: "top center",
//         end: "bottom ",
//         markers: true,
//         scrub: 1,
//         pin: true,
//         pinSpacing: false
//     }
// })

// })
// console.log(bxs);
// console.log(boxes);

//     scrollTrigger.create({
//         animation: tl3,
//         trigger: '.orange',
//         toggleActions: 'restart pause reverse pause',
//         start: "top top",
//         end: "bottom center",
//         markers: true,
//         scrub: 1,
//         pin: true,
//         // pinSpacing: false
//     })
// tl3.to(".brown", {
//     // xPercent: 100,
//     rotate: 360,
//     ease: 'power',
// })
// .to(".brown", {
//     yPercent: 50,
//     ease: 'bounce',
//     backgroundColor: 'orange',
// })
// .to(".brown", {
//     xPercent: -80,
//     rotate: -180,
//     ease: 'bounce'
// })


// ScrollTrigger.create({
//     // animation: tl2,
//     trigger: '.orange',
//     start: "center center",
//     end: '+=500',
//     scrub: true,
//     pin: true,
//     pinSpacing:false,
//     anticipatePin: 1,
//     markers: true
// })


// Stagger Hero text
let heroTimeline = gsap.timeline()
heroTimeline.from(".hero-text", {
    x: 200,
    duration: .8,
    stagger: .4,
    opacity: 0,
    ease: "back"
})
    .to(".free", {
        scale: 1.5,
        duration: .2
        // ease: "back"
    })
    .to(".free", {
        rotate: 20,
        duration: .09
        // ease: "back"
    })
    .to(".free", {
        rotate: -20,
        duration: .09
        // ease: "back"
    })
    .to(".free", {
        rotate: 20,
        duration: .09
        // ease: "back"
    })
    .to(".free", {
        rotate: -20,
        duration: .09
        // ease: "back"
    })
    .to(".free", {
        rotate: 20,
        duration: .09
        // ease: "back"
    })
    .to(".free", {
        rotate: -20,
        duration: .09
        // ease: "back"
    })
    .to(".free", {
        rotate: 0,
        duration: .09
        // ease: "back"
    })
    .to(".free", {
        scale: 1,
        duration: .5,
        ease: "back"
    })


let sec = document.querySelector('.section')
console.log(sec.offsetWidth);

let geartl = gsap.timeline();

ScrollTrigger.create({
    animation: geartl,
    trigger: ".geared",
    scrub: 2,
    // toggleActions: 'play pause none none',
    markers: true,
    start: "top center",
    // end: '=+500',
    pin: ".gear",
    pinSpacing: false,
    id: 'geared'
})
geartl.to(".gear", {
    yPercent: 80,
    scale: .3,
    // ease: 'bounce'
})
geartl.to(".gear", {
    rotate: 2000,
    x: 300
})
    .to(".gear", {
        scale: 1.5,
        rotate: 2520,
    })

// Sponsors
// gsap.fromTo(".sponsors", {
//     // backgroundColor: 'blue',
//     // y: 50
// }, {
//     x: 50,
//     // y: 0,
//     opacity: 0,
//     repeat: -1,
//     yoyo: true,
//     stagger: 0.5,
//     ease: "power",
//     // duration: .9
// })

let sponsors = gsap.utils.toArray(".sponsors")
function displaySponsor() {
    sponsors.forEach((item, index) => {
        // lldlul
        // rurulu
        let sponsortl = gsap.timeline();
        if (index == 0) {
            console.log(index)

            sponsortl.from(item, {
                x: -100,
                duration: .7,
                ease: 'back',
                opacity: 0
            })
            .to(item, {
                x: 0,
                // duration: .2,
                opacity: 1
            })
        } else if (index == 1) {
            sponsortl.from(item, {
                x: -100,
                duration: .7,
                ease: 'back',
                delay: index - .6,
                opacity: 0
            })
            .to(item, {
                x: 0,
                // duration: .2,
                    opacity: 1
                })
        } else if (index == 2) {
            console.log(index - .7)
            sponsortl.from(item, {
                y: 100,
                duration: .7,
                ease: 'back',
                delay: index - 1.2,
                opacity: 0
            })
                .to(item, {
                    x: 0,
                    opacity: 1
                })
        } else if (index == 3) {
            console.log(index - .6)
            sponsortl.from(item, {
                x: -100,
                delay: index - 1.8,
                duration: .7,
                ease: 'back',
                opacity: 0
            })
                .to(item, {
                    x: 0,
                    opacity: 1
                })
        } else if (index == 4) {
            console.log(index - .6)
            sponsortl.from(item, {
                y: -100,
                duration: .7,
                ease: 'back',
                delay: index - 2.5,
                opacity: 0
            })
                .to(item, {
                    x: 0,
                    opacity: 1
                })
        }
        if (index === sponsors.length - 1) {
            setTimeout(() => {
                hideSponsor()
            }, 3000);
        }
    })
    console.log(sponsors);
}

displaySponsor();

function hideSponsor() {
    console.log('hidden');
    sponsors.forEach((item, index) => {
        // rurulu
    let sponsortl = gsap.timeline();

        if (index == 0) {
            console.log(index)
            console.log('reaching');
            sponsortl.to(item, {
                x: 100,
                duration: .7,
                ease: 'back',
                opacity: 0
            })
        } else if (index == 1) {
            sponsortl.to(item, {
                y: -100,
                duration: .7,
                ease: 'back',
                delay: index - .6,
                    opacity: 0
                })
        } else if (index == 2) {
            console.log(index - .7)
            sponsortl.to(item, {
                x: 100,
                duration: .7,
                ease: 'back',
                delay: index - 1.2,
                opacity: 0
            })
        } else if (index == 3) {
            console.log(index - .6)
            sponsortl.to(item, {
                y: -100,
                duration: .7,
                ease: 'back',
                delay: index - 1.8,
                    opacity: 0
                })
        } else if (index == 4) {
            console.log(index - .6)
            sponsortl.to(item, {
                x: -100,
                duration: .7,
                ease: 'back',
                delay: index - 2.5,
                    opacity: 0
                })
        }
        if (index === sponsors.length - 1) {
            setTimeout(() => {
                displaySponsorAgain()
            }, 3000);
        }
    })
}

function displaySponsorAgain () {
    let sponsortl = gsap.timeline();
    sponsors.forEach((item, index) => {
        if (index == 0) {
            sponsortl.to(item, {
                x: 0,
                duration: .5,
                ease: 'back',
                opacity: 1
            })
        } else if (index == 1) {
            sponsortl.to(item, {
                y: 0,
                duration: .5,
                ease: 'back',
                // delay: index - .6,
                opacity: 1
            })
        } else if (index == 2) {
            sponsortl.to(item, {
                x: 0,
                duration: .5,
                ease: 'back',
                // delay: index - 1.2,
                opacity: 1
            })
        }  else if (index == 3) {
            sponsortl.to(item, {
                y: 0,
                duration: .5,
                // delay: index - 1.8,
                ease: 'back',
                opacity: 1
            })
        } else if (index == 4) {
            sponsortl.to(item, {
                x: 0,
                duration: .5,
                ease: 'back',
                // delay: index - 2.5,
                opacity: 1
                })
        }
        if (index === sponsors.length - 1) {
            setTimeout(() => {
                hideSponsor()
            }, 3000);
        }
    })
}

// sections
let sections = gsap.utils.toArray(".section").forEach((elem, index) => {
    console.log(elem, index);
    let tl3 = gsap.timeline()
    ScrollTrigger.create({
        animation: tl3,
        trigger: elem,
        start: "top top",
        end: () => `+=${elem.offsetHeight}`,
        scrub: 2,
        pin: true,
        // toggleActions: 'restart pause reverse pause',
        markers: true,
        // pinSpacsing: false,
        id: 'H-SCRoLL'
    });

    tl3.to(".h-scroll-section", {
        // duration: .1,
        backgroundColor: "#1B1B1B",
        // delay: 0
    }, 0)
    if (index == 0) {
        console.log(elem.childNodes[1]);
        tl3.to(elem, {
            // duration: .1,
            xPercent: -100,
            // delay: 0
        }, 0)
        // .to(".flip-y", {
        //     rotate: 20,
        //     // duration: 10
        // })
    }
})



///////////////////////////////////////////////////////////////////////////////
// // Example to pin and animate multiple sections
// gsap.set('.center', { xPercent: -50, yPercent: -50 })

// // the first section
// gsap.from('.section01 .lines', { xPercent: -100, duration: 1, ease: 'elastic.out(1, 0.3)', stagger: 0.6 }, 1)

// // a loop for the other sections '.section'
// var sections = gsap.utils.toArray(".section").forEach(function (elem) {

//     // select the relevant elements
//     var lines = elem.querySelectorAll(".lines");

//     var tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: elem,
//             pin: elem,
//             scrub: 0.5,
//             start: "top top",
//             end: '+=200%'
//         },
//     })
//     //     .from(lines, { xPercent: -100, duration: 1, ease: 'power2.out', stagger: 0.6 }, 0)
//     //     .to({}, { duration: 1 }) // a little pause at the end

// })
/////////////////////////////////////////////////////////////////////////////////////
