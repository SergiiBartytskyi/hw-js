import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const listImgMarkup = createListImgMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", listImgMarkup);

galleryEl.addEventListener("click", onCardClick);

function createListImgMarkup(images) {
	return images
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
		<img
			class="gallery__image"
			src="${preview}"
			data-source="${original}"
			alt="${description}"
		/>
	</a>
</div>`;
		})
		.join("");
}

function onCardClick(e) {
	e.preventDefault();

	if (e.target.nodeName !== "IMG") {
		return;
	}

	const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

	instance.show();

	galleryEl.addEventListener("keydown", (e) => {
		if (e.code === "Escape") {
			instance.close();
		}
		return galleryEl.removeEventListener;
	});
}
