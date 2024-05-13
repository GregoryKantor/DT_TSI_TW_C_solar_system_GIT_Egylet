const neil_button = document.getElementById("neil_button");
const neil = document.getElementById("neil");

neil_button.addEventListener("click", render_neil);

function render_neil() {
    neil.classList.toggle("visible");
}