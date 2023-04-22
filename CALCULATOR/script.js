const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("calculate")) {
            result.value = eval(result.value);
        } else if (button.classList.contains("clear")) {
            result.value = "";
        } else {
            result.value += button.value;
        }
    });
});
