const flightPath = {
    curveness: 1,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x: 300, y: 20},
        {x: 500, y: -200},
        {x: 100, y: 0},
        {x: 700, y: -200},
        {x: 900, y: 100},
        {x: window.innerWidth, y: 0},
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const controller = new ScrollMagic.Controller();


const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000,
    triggerHook: 0
})

.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);