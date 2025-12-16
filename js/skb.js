
var roles = [
    "AI Expert",
    "Business Analyst",
    "Full Stack Developer",
    "Mobile App Developer",
    "Shopify Expert",
    "Webflow Expert",
    "Framer Expert"
];

var index = 0;
var roleText = document.getElementById("role-text");

setInterval(function () {
    roleText.style.opacity = 0;
    roleText.style.transform = "translateY(10px)";

    setTimeout(function () {
        index = (index + 1) % roles.length;
        roleText.textContent = roles[index];
        roleText.style.transform = "translateY(-10px)";

        requestAnimationFrame(function () {
            roleText.style.opacity = 1;
            roleText.style.transform = "translateY(0)";
        });
    }, 300);
}, 2500);

