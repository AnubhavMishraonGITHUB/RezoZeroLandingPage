gsap.to('.scrollimage img',{
    scrollTrigger: {
        trigger:'#main',
        start:'top center',
        scrub: 2.5,
    },
    bottom: -300,
    ease: 'linear'
})
gsap.to('.clientimg img',{
    scrollTrigger: {
        trigger:'#dets',
        start:'top center',
        scrub: 2.5,
    },
    bottom: -200,
    ease: 'linear'
})