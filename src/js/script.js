"use strict";

function selectElement(el) {
    return document.querySelector(el);
}

function selectElements(el) {
    return document.querySelectorAll(el);
}

//Nav Toggle

selectElement(".nav-toggler").onclick = function () {
    selectElement(".nav-container").classList.toggle("active");
    this.classList.toggle("active");
};

selectElements(".nav-container").forEach(item => {
    item.onclick = () => {
        selectElement(".nav-container").classList.toggle("active");
        selectElement(".nav-toggler").classList.toggle("active");
    }
});

//Testimonials slider

function reduceAvatar() {
    avatarImages.forEach(item => {
        item.style.transform = "scale(1)";
    });
}

function wanishSlides() {
    infoSlides.forEach(item => {
        item.classList.remove("active");
    });
}

let avatarImages = selectElements(".testimonials-avatar-wrapper img");
let avatarSlider = selectElement(".testimonials-avatar-inner");
let infoSlides = selectElements(".testimonials-info-slide");

let avatarCount = -60;
let infoCount = 2;

selectElement(".avatar-left").addEventListener("click", () => {
    reduceAvatar();
    wanishSlides();
    //If user scroll to first avatar - scroll slider to center
    if (avatarCount == -220) {
        avatarCount = -60;
        infoCount = 2;
    }
    else {
        avatarCount -= 80;
        infoCount++;
    }
    avatarSlider.style.left = avatarCount + "px";
    avatarImages[infoCount].style.transform = "scale(1.3)";
    infoSlides[infoCount].classList.add("active");
});

selectElement(".avatar-right").addEventListener("click", () => {
    reduceAvatar();
    wanishSlides();
    //If user scroll to last avatar - scroll slider to center
    if (avatarCount == 100) {
        avatarCount = -60;
        infoCount = 2;
    }
    else {
        avatarCount += 80;
        infoCount--;
    }
    avatarSlider.style.left = avatarCount + "px";
    avatarImages[infoCount].style.transform = "scale(1.3)";
    infoSlides[infoCount].classList.add("active");
});


//Load more projects

selectElement("#load-more").onclick = loadMore();

function loadMore() {
    let count = 12;
    return () => {
        let projects = selectElements(".project");
        let container = selectElement(".portfolio");
        //If all projects is showing we hide some projects
        if (count >= projects.length) {
            count = 12;
            for (let i = 12; i < projects.length; i++) {
                projects[i].classList.add("hide");
                setTimeout(() => { projects[i].classList.remove("active") }, 1000);
                container.scrollIntoView(true);
            }
        }
        //Show next six project
        else {
            count += 6;
            for (let i = 12; i < count; i++) {
                projects[i].classList.remove("hide");
                projects[i].classList.add("active");
                setTimeout(() => container.scrollIntoView(false), 500);
            }
        }
    }
}

//Slick slider

$('.header-slider').slick({
    arrows: false,
    dots: true
});

//Scroll Reveal

(() => {
    let sr = new ScrollReveal();

    sr.reveal(".animation-bottom", {
        distance: "25rem",
        origin: "bottom",
        duration: 1200,
        delay: 600
    });

    sr.reveal(".animation-top", {
        distance: "25rem",
        origin: "top",
        duration: 1000,
        delay: 1000
    });

    sr.reveal(".animation-left", {
        distance: "25rem",
        origin: "left",
        duration: 1000,
        delay: 1200
    });

    sr.reveal(".animation-right", {
        distance: "25rem",
        origin: "right",
        duration: 1000,
        delay: 1200
    });
})();