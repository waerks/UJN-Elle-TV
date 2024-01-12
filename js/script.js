let defaultTransform = 0;
const slider = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function goNext() {
    defaultTransform -= 650;
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = `translateX(${defaultTransform}px)`;
}

next.addEventListener("click", goNext);

function goPrev() {
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform += 650;
    slider.style.transform = `translateX(${defaultTransform}px)`;
}

prev.addEventListener("click", goPrev);
