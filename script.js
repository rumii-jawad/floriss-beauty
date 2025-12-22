const hamburger = document.querySelector(".humburger");
const navlink = document.querySelector(".navlink");

hamburger.addEventListener("click", () => {
    navlink.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function() {
    // Home Page Link
    document.getElementById("homeLink").onclick = function(e) {
        window.location.href = "index.html";
    };

    // Shop Page Link
    document.getElementById("shopLink").onclick = function(e) {
        window.location.href = "shop.html";
    };

    // Skincare Page Link
    document.getElementById("skincareLink").onclick = function(e) {
        window.location.href = "skincare.html";
    };

    // Haircare Page Link
    document.getElementById("haircareLink").onclick = function(e) {
        window.location.href = "haircare.html";
    };
});