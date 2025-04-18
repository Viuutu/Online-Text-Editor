let themeToggleButton = document.getElementById("themeToggle");
let body = document.body;

themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    // Mudar o ícone do botão de alternância de tema
    if (body.classList.contains("dark-theme")) {
        themeToggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});
