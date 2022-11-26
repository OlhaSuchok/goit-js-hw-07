import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryImages = document.querySelector(".gallery");
// console.log(galleryImages);

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

function imageCheckedHandler(event) {
  event.preventDefault();

  const isImageClickedHandler =
    event.target.classList.contains(".gallery__item");
  const currentImageSource = event.target.dataset.source;
  console.log(currentImageSource);

  console.log(event.target);
  console.log(event.target.dataset.source);
  console.log(event.currentTarget);

  if (isImageClickedHandler) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${currentImageSource}">
`);

  instance.show();
}
