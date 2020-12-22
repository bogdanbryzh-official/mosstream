;(() => {
  console.log('hello from timer')
  const DateTime = luxon.DateTime

  const finishUTC = DateTime.utc(2020, 12, 24, 11, 00)

  const count = () => {
    const nowUTC = DateTime.utc()

    const DAY = 60 * 24
    const HOUR = 60

    const finish = {
      days: finishUTC.day,
      hours: finishUTC.hour,
      minutes: finishUTC.minute,
    }
    const now = {
      days: nowUTC.day,
      hours: nowUTC.hour,
      minutes: nowUTC.minute,
    }

    const finishTime =
      finish.days * 24 * 60 + finish.hours * 60 + finish.minutes
    const nowTime = now.days * 24 * 60 + now.hours * 60 + now.minutes

    const differenceTime = finishTime - nowTime

    const days = Math.floor(differenceTime / DAY)
    const hours = Math.floor((differenceTime - days * DAY) / HOUR)
    const minutes = differenceTime - days * DAY - hours * HOUR

    const difference = {
      days,
      hours,
      minutes,
    }

    const showStream = () => {
      console.log('show stream')
      document.getElementById('timer').style.display = 'none'
      document.getElementById('b8mned').style.display = 'block'
    }

    const flashDays = () => {
      const valueContainer = document
        .getElementById('days')
        .getElementsByTagName('p')[0]
      const textContainer = document
        .getElementById('days')
        .getElementsByTagName('p')[1]

      const daysLeft = difference.days

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

      const hoursLeft = difference.hours

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
      console.log('tick')
      const valueContainer = document
        .getElementById('minutes')
        .getElementsByTagName('p')[0]
      const textContainer = document
        .getElementById('minutes')
        .getElementsByTagName('p')[1]

      const minutesLeft = difference.minutes
      console.log()

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

    if (differenceTime <= 0) {
      showStream()
      clearInterval(timer)
    } else {
      flashDays()
      flashHours()
      flashMinutes()
    }
  }

  const timer = setInterval(count, 1000)

  count()
})()
