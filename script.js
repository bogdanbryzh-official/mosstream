"use strict";

const dayChecker = () => {
  const days = document.querySelector(".days");
  const value = days.querySelector("div");
  const paragraph = days.querySelector("p");

  if (parseInt(value.textContent, 2) == 1) {
    paragraph.textContent = "ДЕНЬ";
  } else if (parseInt(value.textContent, 10) < 5) {
    paragraph.textContent = "ДНЯ";
  } else {
    paragraph.textContent = "ДНЕЙ";
  }
};
const hourChecker = () => {
  const hours = document.querySelector(".hours");
  const value = hours.querySelector("div");
  const paragraph = hours.querySelector("p");

  if (
    parseInt(value.textContent, 10) == 1 ||
    parseInt(value.textContent, 10) == 21
  ) {
    paragraph.textContent = "ЧАС";
  } else if (
    parseInt(value.textContent, 10) < 5 ||
    parseInt(value.textContent, 10) > 21
  ) {
    paragraph.textContent = "ЧАСА";
  } else {
    paragraph.textContent = "ЧАСОВ";
  }
};

const minutChecker = () => {
  const minutes = document.querySelector(".minutes");
  const value = minutes.querySelector("div");
  const paragraph = minutes.querySelector("p");

  if (
    parseInt(value.textContent, 10) == 1 ||
    parseInt(value.textContent, 10) == 21 ||
    parseInt(value.textContent, 10) == 31 ||
    parseInt(value.textContent, 10) == 41 ||
    parseInt(value.textContent, 10) == 51
  ) {
    paragraph.textContent = "МИНУТУ";
  } else if (
    parseInt(value.textContent, 10) < 5 ||
    (parseInt(value.textContent, 10) > 21 &&
      parseInt(value.textContent, 10) < 25) ||
    (parseInt(value.textContent, 10) > 31 &&
      parseInt(value.textContent, 10) < 35) ||
    (parseInt(value.textContent, 10) > 41 &&
      parseInt(value.textContent, 10) < 45) ||
    (parseInt(value.textContent, 10) > 51 &&
      parseInt(value.textContent, 10) < 55)
  ) {
    paragraph.textContent = "МИНУТЫ";
  } else {
    paragraph.textContent = "МИНУТ";
  }
};

dayChecker();
hourChecker();
minutChecker();
