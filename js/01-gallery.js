import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryHTML = galleryItems.map(galleryItemRender);

function galleryItemRender({ preview, original, description }) {
  return `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`;
}

galleryEl.insertAdjacentHTML("afterbegin", [...galleryHTML].join(""));

galleryEl.addEventListener("click", onClickCatchURL);

function onClickCatchURL(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`
  );
  instance.show();
}
