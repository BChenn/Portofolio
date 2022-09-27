var slideIndex = 0;
carousel();

function carousel(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length){
        slideIndex = 1
    }

    // for (i = 0; i < dots.length; i++){
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    setTimeout(carousel, 4000);
    // ganti gbs setiap 2 detik
}