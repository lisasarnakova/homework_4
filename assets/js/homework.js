/*
Задания

В вёрстку можно вносить любые изменения (добавлять классы, дата-артрибуты, id и так далее) без изменения внешнего вида. Нельзя изменять другие JS файлы, подключаемые к HTML

    1.  На первом экране вы видите 3 блока с class="features-content". Они внутри себя содержат <div class="content-hide" ></div>, который
        содержит необходимую информацию. При наведении курсора на div с class="features-content" сделайте так, чтобы <div class="content-hide" ></div>
        показывался, а когда уводили курор, то блок с class="features-content" становился предыдущих размеров. 

        P.S. Нормально, если при наведении на див с class="features-content" он становится оранжевым - это можно не фиксить

    2.  На втором экране вы видите табы:
        а) Best Education
        б) Top Managemen
        в) Quality Meeting
        При нажатии на каждый из этих табов (квадратик или название) сайтик должен показывать соответствующий блок информации
        с нужной фотографией, описанием и заголовком.

        P.S. Сейчас показаны все блоки с описанием

    3. На третьем экране есть отсчёт обратного времени. Сделайте так, чтобы обратный отсчёт был в режиме реального времени (посекундно).
    В качестве дедлайна (крайней даты) возьмите 31.12.2023

    P.S. Подсказка - в 22_js уроке в проекте Food разбирается, как работать со счётчиком

    4.  На 4-ом экране есть 5 карточек, заполненные информацией. Сделайте так, чтобы верстка подтягивалась и вставлялась в HTML документа
        из JS, а именно из массива coursesMass. Это значит, в самом HTML не должно быть верстки (вам нужно будет удалить),
        и она должна вставляться только через JS

*/

'use strict'

// Задание 1
document.addEventListener('DOMContentLoaded', function() {
  const featuresContent = document.querySelectorAll('.features-content');
  featuresContent.forEach(content => {
    content.addEventListener('mouseover', function() {
      content.querySelector('.content-hide').style.display = 'block';
    });
    content.addEventListener('mouseout', function() {
      content.querySelector('.content-hide').style.display = 'none';
    });
  });
});

// Задание 2

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('#tabs ul li a');
  const tabContents = document.querySelectorAll('.tabs-content article');
  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function(event) {
      event.preventDefault();
      // Скрываем все блоки с описанием
      tabContents.forEach(content => {
        content.style.display = 'none';
      });
      // Показываем только выбранный блок с описанием
      tabContents[index].style.display = 'block';
    });
  });
});


// Задание 3

document.addEventListener('DOMContentLoaded', function() {
  // Устанавливаем дату дедлайна
  const deadline = new Date('2023-12-31T23:59:59').getTime();

  // Обновляем обратный отсчёт каждую секунду
  setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = deadline - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Обновляем значения на странице
    document.getElementById('days').innerHTML = '<div class="value">' + formatTime(days) + '</div><span>Days</span>';
    document.getElementById('hours').innerHTML = '<div class="value">' + formatTime(hours) + '</div><span>Hours</span>';
    document.getElementById('minutes').innerHTML = '<div class="value">' + formatTime(minutes) + '</div><span>Minutes</span>';
    document.getElementById('seconds').innerHTML = '<div class="value">' + formatTime(seconds) + '</div><span>Seconds</span>';
  }, 1000);
});

// Функция для форматирования времени (добавляет ведущий ноль, если число меньше 10)
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

// Задание 4
const coursesMass = [
  {
    cardImg: {
      src: 'assets/images/courses-01.jpg',
      alt: 'Course #1',
    },
    header: 'Digital Marketing',
    descr:
      'You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-01.png',
      alt: 'Author #1',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-02.jpg',
      alt: 'Course #2',
    },
    header: 'Business World',
    descr:
      'Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.',
    authorImg: {
      src: 'assets/images/author-02.png',
      alt: 'Author #2',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-03.jpg',
      alt: 'Course #3',
    },
    header: 'Media Technology',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec.',
    authorImg: {
      src: 'assets/images/author-03.png',
      alt: 'Author #3',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-04.jpg',
      alt: 'Course #4',
    },
    header: 'Communications',
    descr:
      'Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.',
    authorImg: {
      src: 'assets/images/author-04.png',
      alt: 'Author #4',
    },
  },
  {
    cardImg: {
      src: 'assets/images/courses-05.jpg',
      alt: 'Course #5',
    },
    header: 'Business Ethics',
    descr:
      'Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.',
    authorImg: {
      src: 'assets/images/author-05.png',
      alt: 'Author #5',
    },
  },
]


const carouselWrapper = document.querySelector('.carousel__wrapper');
  coursesMass.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('carousel__item');
    const img = document.createElement('img');
    img.src = course.cardImg.src;
    img.alt = course.cardImg.alt;
    const content = document.createElement('div');
    content.classList.add('carousel__content');
    const header = document.createElement('h4');
    header.textContent = course.header;
    const descr = document.createElement('p');
    descr.textContent = course.descr;
    const lastRow = document.createElement('div');
    lastRow.classList.add('item__last-row');
    const authorImg = document.createElement('img');
    authorImg.src = course.authorImg.src;
    authorImg.alt = course.authorImg.alt;
    const textButton = document.createElement('div');
    textButton.classList.add('text-button-pay');
    const link = document.createElement('a');
    link.href = '#';
    link.innerHTML = 'Pay <i class="fa fa-angle-double-right"></i>';

    textButton.appendChild(link);
    lastRow.appendChild(authorImg);
    lastRow.appendChild(textButton);
    content.appendChild(header);
    content.appendChild(descr);
    content.appendChild(lastRow);
    card.appendChild(img);
    card.appendChild(content);

    carouselWrapper.appendChild(card);
  });
