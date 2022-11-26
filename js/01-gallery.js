import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryImages = document.querySelector(".gallery");
console.log(galleryImages);

const makeImage = function () {
  return galleryItems
    .map((image) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="large-image.jpg"
      alt="${image.description}"
    />
  </a>
</div>
`;
    })
    .join("");
};

galleryImages.insertAdjacentHTML("afterbegin", makeImage());
galleryImages.addEventListener("click", selectImage());

function selectImage(event) {}

console.log(makeImage());
console.log(galleryItems);
