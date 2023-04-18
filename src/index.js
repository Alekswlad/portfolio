import "./styles.scss";
import "./img/hero.png";
import "./img/port1.jpg";
import "./img/port2.jpg";
import "./img/port3.jpg";
import "./img/port4.jpg";
import "./img/port5.jpg";
import "./img/port6.jpg";

(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
})();
