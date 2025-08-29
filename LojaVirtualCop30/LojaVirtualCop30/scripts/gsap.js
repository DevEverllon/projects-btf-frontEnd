gsap.registerPlugin(ScrollTrigger);

// Animação do header
gsap.from("header h1, header p", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2, 
    ease: "power2.out"
});

// Animação dos cards de produto
gsap.from(".card-produto", {
    x: -50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power2.out",

    // Para fazer a animação quando rolar para cima ou para baixo:
    scrollTrigger: {
        trigger: ".card-produto",
        start: "top 60%",
        toggleActions: "play reverse play reverse"
    }
});

//Animação do footer
gsap.from("footer", {
    y: 100,
    opacity: 0,
    duration: 1.5,

    ease: "power2.out",
    // Para fazer a animação quando rolar para cima ou para baixo:
    scrollTrigger: {
        trigger: "footer",
        start: "top 60%",
        toggleActions: "play reverse play reverse"
    }
});