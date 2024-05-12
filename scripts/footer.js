console.log("footer.js is connected");

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("year").innerHTML = currentYear;
});