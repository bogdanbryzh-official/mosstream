;(() => {
  let ANSWERS_LEFT = 5
  let CORRECT_ANSWERS = 0
  let WRONG_ANSWERS = 0

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  let questions = [
    {
      question:
        'Специалисты по работе с данными придумали правило 3-2-1, обеспечивающее соблюдение техник безопасности. Что означают эти цифры?',
      answers: [
        {
          text:
            '3 копии данных, 2 из них на разных носителях информации, 1 - на удаленной площадке',
          correct: true,
        },
        {
          text: '3 площадки, 2 разных носителя, 1 копия данных',
        },
        {
          text: '3 носителя, 2 копии, 1 площадка',
        },
        {
          text:
            'Всегда осуществлять обратный отсчет перед запуском новой программы',
        },
      ],
    },
    {
      question:
        'В какой стране в Новый год падает бумажный снег из разрезанных газет?',
      answers: [
        {
          text: 'Бразилия',
          correct: true,
        },
        {
          text: 'Греция',
        },
        {
          text: 'Чили',
        },
        {
          text: 'Сингапур',
        },
      ],
    },
    {
      question:
        'На какой планете Солнечной системы Новый год можно отмечать в 4 раза чаще, чем на Земле?',
      answers: [
        {
          text: 'Меркурий',
          correct: true,
        },
        {
          text: 'Юпитер',
        },
        {
          text: 'Уран',
        },
        {
          text: 'Марс',
        },
      ],
    },
    {
      question: 'В какой стране в XVI веке появилась первая елочная игрушка?',
      answers: [
        {
          text: 'Саксония',
          correct: true,
        },
        {
          text: 'Австралия',
        },
        {
          text: 'Богемия',
        },
        {
          text: 'Германия',
        },
      ],
    },
    {
      question:
        '"Есть ли жизнь на Марсе, нет ли жизни на Марсе - науке пока неизвестно", - говорил персонаж культового фильма "Карнавальная ночь", сыгранный этим актером:',
      answers: [
        {
          text: 'Сергей Филиппов',
          correct: true,
        },
        {
          text: 'Игорь Ильинский',
        },
        {
          text: 'Андрей Тутышкин',
        },
        {
          text: 'Владимир Зельдин',
        },
      ],
    },
    {
      question:
        'В качестве средств от "большого живота" А.П. Чехов прописывал своим тучным пациентам такую диету:',
      answers: [
        {
          text: 'Молочную',
          correct: true,
        },
        {
          text: 'Фруктовую',
        },
        {
          text: 'Арбузную',
        },
        {
          text: 'Огуречную',
        },
      ],
    },
    {
      question: 'Какая усадьба изначально называлась Черная грязь?',
      answers: [
        {
          text: 'Царицыно',
          correct: true,
        },
        {
          text: 'Коломенское',
        },
        {
          text: 'Кусково',
        },
        {
          text: 'Архангельское',
        },
      ],
    },
    {
      question: 'Какой вид транспорта был первым в Москве?',
      answers: [
        {
          text: 'Трамвай',
          correct: true,
        },
        {
          text: 'Троллейбус',
        },
        {
          text: 'Автобус',
        },
        {
          text: 'Метро',
        },
      ],
    },
    {
      question:
        'Чем угощалась в лесу Марфушка — Инна Чурикова в сказке Александра Роу «Морозко»?',
      answers: [
        {
          text: 'Луком',
          correct: true,
        },
        {
          text: 'Яблоками',
        },
        {
          text: 'Пельменями',
        },
        {
          text: 'Мандаринами',
        },
      ],
    },
    {
      question:
        'Чем профессор Преображенский рекомендовал закусывать водку в фильме «Собачье сердце»?',
      answers: [
        {
          text: 'Горячими закусками',
          correct: true,
        },
        {
          text: 'Дичью',
        },
        {
          text: 'Заливной рыбой',
        },
        {
          text: 'Солеными огурцами',
        },
      ],
    },
    {
      question:
        'Какие из перечисленных соревнований включены в программу Олимпийских игр Санта Клаусов и Дедов Морозов?',
      answers: [
        {
          text: 'Гонки на оленьих упряжках',
          correct: true,
        },
        {
          text: 'Соревнования в скорости украшения елок',
        },
        {
          text: 'Соревнования в мастерстве создания узоров на оконных стеклах',
        },
        {
          text: 'Соревнования в подъеме гири',
        },
      ],
    },
    {
      question:
        'Вокруг какого адреса строится сюжет «Иронии судьбы, или С легким паром»?',
      answers: [
        {
          text: '3-я улица Строителей',
          correct: true,
        },
        {
          text: '2-я Молодежная улица',
        },
        {
          text: '1-я Садовая улица',
        },
        {
          text: 'Проспект Ленина',
        },
      ],
    },
    {
      question:
        'В 2018-м вышел новый «Гринч». А когда эта сказка была экранизирована впервые?',
      answers: [
        {
          text: 'В 1966-м',
          correct: true,
        },
        {
          text: 'В 1976-м',
        },
        {
          text: 'В 1986-м',
        },
        {
          text: 'В 1996-м',
        },
      ],
    },
    {
      question:
        'Знаменитый «Кошмар перед Рождеством» Генри Селика и Тима Бёртона основан на:',
      answers: [
        {
          text: 'Поэме Бёртона',
          correct: true,
        },
        {
          text: 'Рассказе Селика',
        },
        {
          text: 'Повести Чарльза Диккенса',
        },
        {
          text: 'Пьесе автора «Гринча» Доктора Сюсса',
        },
      ],
    },
    {
      question:
        'Готэм-Сити, возможно, самое мрачное место за всю историю кино для встречи Рождества. Но в каком из фильмов о Бэтмене действие происходит на Рождество?',
      answers: [
        {
          text: '«Бэтмен возвращается»',
          correct: true,
        },
        {
          text: '«Бэтмен»',
        },
        {
          text: '«Бэтмен навсегда»',
        },
        {
          text: '«Бэтмен и Робин»',
        },
      ],
    },
    {
      question:
        'В новогоднем выпуске «Ну, погоди!» в песне «Расскажи, Снегурочка» аккомпанирует очень странный джазовый оркестр. Из кого он состоит?',
      answers: [
        {
          text: 'Из обезьян',
          correct: true,
        },
        {
          text: 'Из барсуков',
        },
        {
          text: 'Из бобров',
        },
        {
          text: 'Из медведей',
        },
      ],
    },
    {
      question: 'Компьютерную мышь придумал Дуглас Энгельбарт в:',
      answers: [
        {
          text: '1964',
          correct: true,
        },
        {
          text: '1955',
        },
        {
          text: '1984',
        },
        {
          text: '1996',
        },
      ],
    },
    {
      question:
        'Компания Nokia была основана в 1865 году и долгое время занималась производством:',
      answers: [
        {
          text: 'Бумаги',
          correct: true,
        },
        {
          text: 'Проводов',
        },
        {
          text: 'Вилок',
        },
        {
          text: 'Ткани',
        },
      ],
    },
    {
      question:
        '«Аккуратный программист — быстрый программист». Кто это сказал?',
      answers: [
        {
          text: 'Билл Гейтс',
          correct: true,
        },
        {
          text: 'Марк Цукерберг',
        },
        {
          text: 'Павел Дуров',
        },
        {
          text: 'Александр Грина',
        },
      ],
    },
    {
      question:
        'Как называется шифр, в котором каждый символ текста заменяется символом, находящемся на некотором постоянном числе позиций левее или правее в алфавите?',
      answers: [
        {
          text: 'Шифр Цезаря',
          correct: true,
        },
        {
          text: 'Мудрая лотерея',
        },
        {
          text: 'Тарабарщина',
        },
        {
          text: 'Энигма',
        },
      ],
    },
  ]

  questions = shuffleArray(shuffleArray(shuffleArray(shuffleArray(questions))))

  const goQuizBtn = document.getElementById('go-quiz')
  const quizBackdrop = document.getElementsByClassName('quiz-backdrop')[0]
  const quizContainer = document.getElementById('quiz-container')

  quizContainer.innerHTML = `<button id="close-quiz"></button><div id="quiz" class="quiz"></div>`

  const quizBox = document.getElementById('quiz')

  const getNextBtn = document.createElement('button')
  getNextBtn.textContent = 'Следующий вопрос'
  getNextBtn.disabled = true
  getNextBtn.classList.add('next')

  const getRandomQuestion = () => {
    return questions.pop(Math.round(Math.random() * questions.length))
  }

  const checkAnswer = e => {
    answer = e.target
    console.log('answer clicked', answer)
    quizContainer.classList.remove('quiz-default-theme')
    getNextBtn.disabled = false

    const all = answer.parentNode.childNodes
    all.forEach(item => {
      if (item.tagName === 'LABEL') {
        item.removeEventListener('click', checkAnswer)
      }
    })

    if (answer.dataset.correct === 'true') {
      quizContainer.classList.add('quiz-success-theme')
      answer.classList.add('correct')
      CORRECT_ANSWERS++
    } else {
      quizContainer.classList.add('quiz-fail-theme')
      answer.classList.add('wrong')
      WRONG_ANSWERS++
    }
    if (ANSWERS_LEFT === 1) {
      getNextBtn.textContent = 'Завершить'
      getNextBtn.dataset.end = true
    } else {
      getNextBtn.textContent = 'Следующий вопрос'
      getNextBtn.dataset.end = false
    }
  }

  const showAnswer = a => {
    const answer = document.createElement('label')
    answer.classList.add('variant')
    answer.textContent = a.text
    answer.dataset.correct = a.correct

    answer.addEventListener('click', checkAnswer)

    quizBox.appendChild(answer)
  }

  const showQuestion = q => {
    const question = document.createElement('h4')
    question.classList.add('question')
    question.textContent = q.question

    quizBox.appendChild(question)
    shuffleArray(q.answers).forEach(answer => {
      showAnswer(answer)
    })
  }

  const showAgain = () => {
    let text
    if (CORRECT_ANSWERS === 5) {
      text = `Поздравляем! 🥳`
    } else if (CORRECT_ANSWERS > WRONG_ANSWERS) {
      text = `Неплохо 😉`
    } else if (WRONG_ANSWERS > CORRECT_ANSWERS) {
      text = 'Бывает 🤷🏻'
    } else if (WRONG_ANSWERS === 5) {
      text = `Может еще раз? 😌`
    }
    quizBox.innerHTML = `
      <h3>${text}</h3>
      <p>Правильных ответов ${CORRECT_ANSWERS}</p>
      <p>Неправильных ответов ${WRONG_ANSWERS}</p>
      <button id="try-again">Попробовать еще</button>
    `
    getNextBtn.dataset.end = 'false'

    const tryAgainBtn = document.getElementById('try-again')
    tryAgainBtn.addEventListener('click', () => {
      showQuiz()
      ANSWERS_LEFT = 5
      CORRECT_ANSWERS = 0
      WRONG_ANSWERS = 0
    })
  }
  const showQuiz = () => {
    const closeQuiz = () => {
      quizBackdrop.classList.add('hidden')
    }

    const closeQuizBtn = document.getElementById('close-quiz')
    closeQuizBtn.addEventListener('click', closeQuiz)

    ANSWERS_LEFT--
    quizContainer.classList.remove('quiz-success-theme')
    quizContainer.classList.remove('quiz-fail-theme')
    quizContainer.classList.add('quiz-default-theme')

    if (getNextBtn.dataset.end === 'true') {
      showAgain()
    } else {
      quizBox.innerHTML = `<h3>Дайте ответ на вопрос:</h3>`
      showQuestion(getRandomQuestion())
      quizBackdrop.classList.remove('hidden')
      getNextBtn.disabled = true
      quizBox.appendChild(getNextBtn)
    }
  }

  goQuizBtn.addEventListener('click', () => {
    showQuiz()
    ANSWERS_LEFT = 5
    CORRECT_ANSWERS = 0
    WRONG_ANSWERS = 0
  })
  getNextBtn.addEventListener('click', showQuiz)
})()
