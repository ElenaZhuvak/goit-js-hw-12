import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import {fetchImages} from './js/pixabay-api';
import {renderGallery, showLoader, hideLoader, showLoadMore, hideLoadMore} from './js/render-functions';

let lightbox;
let currentPage = 1;
let currentQuery = '';
let totalHits = 0;
let loadedImages = 0;

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

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

    currentQuery = query;
    currentPage = 1;
    loadedImages = 0;
    gallery.innerHTML = '';
    hideLoadMore();
    showLoader();

    try {
        const data = await fetchImages(query, currentPage);
        totalHits = data.totalHits;
        loadedImages+= data.hits.length;

        if (data.hits.length > 0) {
            renderGallery(data.hits);
            initializeLightbox();
            checkEndOfCollection();
        } else {
            iziToast.info({
                message: "Sorry, there are no images matching your search query. Please try again",
                position: "topRight",
            })
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
// ** =============================================== ** 
loadMoreBtn.addEventListener('click', onLoadMore);

async function onLoadMore() {
    currentPage += 1;
    showLoader();
    hideLoadMore();

    try {
        const data = await fetchImages(currentQuery, currentPage);

        if (data.hits.length > 0) {
            loadedImages += data.hits.length;
            renderGallery(data.hits);
            lightbox.refresh();
            if (checkEndOfCollection()) {
                return
            }
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again',
            position: 'topRight',
        })
    }
    hideLoader();
}
// ** =============================================== ** 
function checkEndOfCollection() {
    if(loadedImages>= totalHits && totalHits !== 0) {
        hideLoadMore();
        iziToast.info({
            message: "We're sorry, but you've reached the end of search results",
            position: "topRight",
        })
    } else {
        showLoadMore()
    }
}
// ** =============================================== ** 
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
