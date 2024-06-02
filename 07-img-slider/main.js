let imgContainer = document.getElementById("img-container");
let prevBtn = document.getElementById("Prev");
let nextBtn = document.getElementById("Next");
let imgsEl = document.querySelectorAll(".img");

let currentimg = 1;

let timeout;

nextBtn.addEventListener("click", () => {
    currentimg++;
    updateImg();
    clearTimeout(timeout);
});

prevBtn.addEventListener("click", () => {
    currentimg--;
    updateImg();
    clearTimeout(timeout);
});
updateImg();

function updateImg() {
    if (currentimg > imgsEl.length) {
        currentimg = 1;
    } else if (currentimg < 1) {
        currentimg = imgsEl.length;
    }
    imgContainer.style.transform = `translateX(-${(currentimg - 1) * 400}px)`;
    timeout = setTimeout(() => {
        currentimg++;
        updateImg();
    }, 3000);
}
