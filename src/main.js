import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchImages} from './js/pixabay-api';
import {renderGallery, showLoader, hideLoader} from './js/render-functions';
let lightbox;

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();
    const query = form.elements.searchInput.value.trim();

        if (query === '') {
            iziToast.warning({
                message: 'Please fill in the field',
                position: "topRight",
            });
            return;
        }
    gallery.innerHTML = '';
    showLoader();

    try {
        const images = await fetchImages(query);
        if (images.length > 0) {
            renderGallery(images);
            initializeLightbox();
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again',
            position: "topRight",
        });
    }
    hideLoader();
    form.reset();
}

function initializeLightbox () {
    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionDelay: 250,
        });
    }
}
