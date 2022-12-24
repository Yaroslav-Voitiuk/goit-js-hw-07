import { galleryItems } from './gallery-items.js';
// Change code below this line

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.


console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];
const markup = galleryItems.reduce((acc, {preview, original, description}) => 
    acc + `<div class="gallery__item">
  <a class="gallery__link" href= "${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`, ''
)
gallery.insertAdjacentHTML('beforeend', markup)
gallery.append(...items)
gallery.addEventListener('click', elem => {
  elem.preventDefault();
  if (elem.target.getAttribute('data-source') == undefined) {
    return;
  }
    const selectedImage = elem.target.getAttribute('data-source');

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">`)
    instance.show()

    gallery.addEventListener('keydown', element => {
        if (element.key === 'Escape') {
          instance.close();
        }
      });
    }); 