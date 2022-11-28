import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryImages = document.querySelector(".gallery");

const makeImage = function () {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join("");
};

galleryImages.insertAdjacentHTML("afterbegin", makeImage());
galleryImages.addEventListener("click", imageCheckedHandler);

let instance;

function imageCheckedHandler(event) {
  event.preventDefault();

  const isImageClickedHandler =
    event.target.classList.contains(".gallery__image");

  const currentImageSource = event.target.dataset.source;
  console.log(currentImageSource);

  if (isImageClickedHandler) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${currentImageSource}">
`);

  instance.show();
}
