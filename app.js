const shop = document.getElementById("cart");
const el = document.getElementById("product");
const bodyel = document.getElementById("body")
const overlay = document.getElementById('overlay')
let isPlaying = false;

shop.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        el.classList.add('visible');
        const overlay = document.getElementById('overlay')
    } else {
        el.classList.remove('visible');
        const overlay = document.getElementById('overlay')
    }
});
