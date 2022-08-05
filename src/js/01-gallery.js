// Завдання 1 - бібліотека SimpleLightbox
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилівnpm install -g parcel-bundler
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryContainer = document.querySelector('.gallery');
// создаем переменую где будет храниться вся галерея
const cardMarkup = createGalleryCardsMarkup(galleryItems);
// добавляем созданную галерею в разметку
galleryContainer.insertAdjacentHTML('beforeend', cardMarkup);
function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" 
    src="${preview}" 
    data-source="${original}"
    alt="${description}" />
    </a>`;
    })
    .join('');
}
let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionType: 'attr',
  captionPosition: 'bottom',
  captionDelay: 250,
  captionsData: 'alt',
});
console.log(galleryItems);
