let currentX = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    const carousel = document.getElementById("my-carousel");

    const carouselItems = [...document.getElementsByClassName("my-carousel-item")]
        .flatMap((ele) => {
            let pos = ele.getBoundingClientRect();
            return pos.left;
        });

    document.getElementsByClassName("")

    var current_pos = 0
    let intervalId = setInterval(() => {
        carousel.scrollTo({
            left: currentX,
            behavior: 'smooth'
        });
        current_pos += 1;

        currentX += 10;
        if(carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
            clearInterval(intervalId);
        }
    }, 50)

});