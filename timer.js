// `<script src="https://facecast.net/v/js/iframe.js"></script>
// <iframe
// id="b8mned"
// onload="fc_load_iframe(this)"
// style="border: none"
// width="100%"
// height="600"
// allow="autoplay; fullscreen"
// allowfullscreen
// ></iframe>`;

const finishDay = 16
const finishHour = 12
const finishMinute = 00

const getDaysLeft = () => {
  finishDay - new Date().getUTCDate()
}
const getHoursLeft = () => {
  finishHour - new Date().getUTCHours()
}
const getMinutesLeft = () => {
  finishMinute - new Date().getUTCMinutes()
}

const showStream = () => {
  document.getElementById('timer').remove()
  document.getElementById(
    'stream'
  ).innerHTML += `<script src="https://facecast.net/v/js/iframe.js"></script>
  <iframe
  id="b8mned"
  onload="fc_load_iframe(this)"
  style="border: none"
  width="100%"
  height="600"
  allow="autoplay; fullscreen"
  allowfullscreen
  ></iframe>`
}

const flashDays = () => {
  const valueContainer = document
    .getElementById('days')
    .getElementsByTagName('p')[0]
  const textContainer = document
    .getElementById('days')
    .getElementsByTagName('p')[1]

  const daysLeft = getDaysLeft()

  valueContainer.textContent = daysLeft

  if (daysLeft == 1) {
    textContainer.textContent = 'ДЕНЬ'
  }
  if (daysLeft > 1 && daysLeft < 5) {
    textContainer.textContent = 'ДНЯ'
  }
  if (daysLeft > 5) {
    textContainer.textContent = 'ДНЕЙ'
  }
}

const flashHours = () => {
  const valueContainer = document
    .getElementById('hours')
    .getElementsByTagName('p')[0]
  const textContainer = document
    .getElementById('hours')
    .getElementsByTagName('p')[1]

  const hoursLeft = getHoursLeft()

  valueContainer.textContent = hoursLeft

  if (hoursLeft == 1 || hoursLeft == 21) {
    textContainer.textContent = 'ЧАС'
  } else {
    if ((hoursLeft > 1 && hoursLeft < 5) || hoursLeft > 21) {
      textContainer.textContent = 'ЧАСА'
    } else {
      textContainer.textContent = 'ЧАСОВ'
    }
  }
}

const flashMinutes = () => {
  const valueContainer = document
    .getElementById('minutes')
    .getElementsByTagName('p')[0]
  const textContainer = document
    .getElementById('days')
    .getElementsByTagName('p')[1]

  const minutesLeft = getMinutesLeft()

  valueContainer.textContent = minutesLeft

  if (
    minutesLeft == 1 ||
    minutesLeft == 21 ||
    minutesLeft == 31 ||
    minutesLeft == 41 ||
    minutesLeft == 51
  ) {
    textContainer.textContent = 'МИНУТУ'
  } else if (
    (minutesLeft > 1 && minutesLeft < 5) ||
    (minutesLeft > 21 && minutesLeft < 25) ||
    (minutesLeft > 31 && minutesLeft < 35) ||
    (minutesLeft > 41 && minutesLeft < 45) ||
    (minutesLeft > 51 && minutesLeft < 55)
  ) {
    textContainer.textContent = 'МИНУТЫ'
  } else {
    textContainer.textContent = 'МИНУТ'
  }
}

const count = () => {
  if (getDaysLeft() <= 0 || getHoursLeft() <= 0 || getMinutesLeft() <= 0) {
    clearInterval(timer)
    showStream()
  } else {
    flashDays()
    flashHours()
    flashMinutes()
  }
}

count()

const timer = setInterval(count, 1000)
