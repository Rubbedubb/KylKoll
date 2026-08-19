const amountControls = document.querySelectorAll(".amount-control");

amountControls.forEach(function(control) {

    const button = control.querySelector(".amount-button");
    const sliderContainer = control.querySelector(".slider-container");
    const slider = control.querySelector(".amount-slider");

    button.addEventListener("click", function() {
        sliderContainer.classList.toggle("visible");
    });

    slider.addEventListener("input", function() {
        button.textContent = slider.value + " % kvar";
    });

});
