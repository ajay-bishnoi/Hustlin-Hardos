"use strict";
function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_hide");
  document.querySelector(".menu").classList.toggle("cross");
}

function navWorking() {
  if (window.innerWidth < 576) {
    document.querySelector("body").classList.remove("overflow_hide");
    document.querySelector(".closeNav").classList.toggle("start-0");
    document.querySelector(".menu").classList.toggle("cross");
  }
}
// preLoader//
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow_hidden");
    }, 1000);
  });
});

// back to top button //
let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.innerWidth < 992 && window.scrollY > 1050) {
    mybutton.setAttribute("style", "display: flex;");
  } else if (window.innerWidth >= 992 && window.scrollY > 400) {
    mybutton.setAttribute("style", "display: flex;");
  } else {
    mybutton.setAttribute("style", "display: none;");
  }
});


//
$(".responsive").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  prevArrow: ".prev",
  nextArrow: ".next",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// slider-2
$(".responsive2").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  prevArrow: ".Previous",
  nextArrow: ".Nexts",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const timeData = document.querySelector(".time");
function countdownTimer(timeString) {
  let [days, hours, minutes, seconds] = timeString.split(":").map(Number);
  let totalSeconds =
    days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  const interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      alert("Timer has ended");
      return;
    }
    days = Math.floor(totalSeconds / (24 * 60 * 60));
    hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    seconds = totalSeconds % 60;
    const timeLeft = `${days}:${hours}:${minutes}:${seconds}`;
    timeData.innerHTML = timeLeft;
    totalSeconds--;
  }, 1000);
}
countdownTimer("40:15:12:10");

// accordian
const toggleAccordion = (accordionItem) => {
  const isActive = accordionItem.classList.toggle("active");
  accordionItem.classList.toggle("addBorder", isActive);
  const plusIcon = accordionItem.querySelector("img");
  if (plusIcon) {
    plusIcon.src = isActive
      ? "./assets/img/svg/minus.svg"
      : "./assets/img/svg/plus.svg";
  }
};

const accitem = document.querySelectorAll(".accordion_item");

accitem.forEach((accordionItem) => {
  accordionItem.addEventListener("click", () => {
    const activeAcc = document.querySelector(".accordion_item.active");
    if (activeAcc && activeAcc !== accordionItem) {
      toggleAccordion(activeAcc);
    }
    toggleAccordion(accordionItem);
  });
});
//
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const valueElement = document.querySelector(".value");

let value = 100;

const updateValue = () => {
  valueElement.textContent = value;
};

const handlePlusClick = () => {
  value++;
  updateValue();
};

const handleMinusClick = () => {
  if (value > 0) {
    value--;
    updateValue();
  }
};

plusButton.addEventListener("click", handlePlusClick);
minusButton.addEventListener("click", handleMinusClick);

updateValue();
