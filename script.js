const list = document.querySelector(".navlink");
const humburger = document.querySelector(".fa-bars");

humburger.addEventListener("click", () => {
    // This swaps the icon
    humburger.classList.toggle("fa-x"); 
    
    // THIS IS THE MISSING PART: This shows/hides the menu
    list.classList.toggle("navlink-active"); 
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