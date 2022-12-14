import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryPicture = document.querySelector(".gallery");

const makePicture = function () {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join("");
};

galleryPicture.insertAdjacentHTML("afterbegin", makePicture());
let lightbox = new SimpleLightbox(".gallery a", {});

console.log(lightbox);

lightbox.defaultOptions.captionsData = "alt";
lightbox.defaultOptions.captionPosition = "bottom";
lightbox.defaultOptions.captionDelay = "250ms";
