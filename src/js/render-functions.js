export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');

    const markup = images.map(image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${image.webformatURL}" 
                    alt="${image.tags}" 
                    loading="lazy"
                />
                <div class="image-info">
                    <p class="info-item"><b>Likes:</b> ${image.likes}</p>
                    <p class="info-item"><b>Views:</b> ${image.views}</p>
                    <p class="info-item"><b>Comments:</b> ${image.comments}</p>
                    <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
                </div>
            </a>
        </li>
    `).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
}

const loaderContainer = document.querySelector('.loader-container');
const loadMoreBtn = document.querySelector('.load-more');

export function showLoader() {
    loaderContainer.classList.remove('hidden');
}
export function hideLoader() {
    loaderContainer.classList.add('hidden')
}

export function showLoadMore() {
    loadMoreBtn.classList.remove('hidden');
}
export function hideLoadMore() {
    loadMoreBtn.classList.add('hidden');
}
