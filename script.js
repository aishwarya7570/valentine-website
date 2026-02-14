const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

yesBtn.addEventListener("click", function () {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

