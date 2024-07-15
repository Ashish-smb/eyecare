$('.hero-area-eyecare').owlCarousel({
    items: 1,
    loop :true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    dots:true,
    nav:true,
});
$('.qualified-doctors-carousel').owlCarousel({
    items:3,
    margin:10,
    loop: true,
    dots:true,
    nav:true,
});

document.querySelector("#toggle-btn").addEventListener("click", () => {
    if(document.querySelector("#toggle-menu").classList.contains("hidden")){
        document.querySelector("#toggle-menu").classList.toggle("block");
        document.querySelector("#toggle-menu").classList.toggle("hidden");
    }else{
        document.querySelector("#toggle-menu").classList.toggle("block");
        document.querySelector("#toggle-menu").classList.toggle("hidden");
    }
})