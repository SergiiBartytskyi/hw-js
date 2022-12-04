import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const listImgMarkup = createListImgMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", listImgMarkup);

function createListImgMarkup(images) {
	return images
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
		})
		.join("");
}

new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
});
