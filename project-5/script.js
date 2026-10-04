var tl = gsap.timeline();

tl.from("#sec-bar div",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.8,
    stagger:0.3
})

tl.from("#hero h1",{
    x:-815,
    opacity:0,
    delay:0.1,
    duration:2,
    stagger:0.3    
})

tl.from("#hero p",{
    x:-615,
    opacity:0,
    delay:0.1,
    duration:2,
    stagger:0.4
})

tl.from("#hero button",{
    x:-355,
    opacity:0,
    delay:0.2,
    duration:2,
    stagger:0.4
})