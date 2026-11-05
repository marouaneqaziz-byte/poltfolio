
// MOBILE MENU
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuIcon.classList.replace("fa-xmark", "fa-bars");
    });
});

// LANGUAGE TRANSLATION
const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

languageBtn.addEventListener("click", () => {

    if (currentLanguage === "en") {
        currentLanguage = "fr";
        languageBtn.textContent = "EN";
        document.documentElement.lang = "fr";
    } else {
        currentLanguage = "en";
        languageBtn.textContent = "FR";
        document.documentElement.lang = "en";
    }

    document.querySelectorAll("[data-en]").forEach(element => {
        element.textContent = element.getAttribute(
            "data-" + currentLanguage
        );
    });

});
