import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const BASIC_URL = 'https://pixabay.com/api/';
const KEY_API = '46224221-307a76b395d66c959be951e41';

export async function fetchImages(query, page = 1) {
try {
    const response = await axios.get(BASIC_URL, {
        params: {
            key: KEY_API,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 15,
        }
    });

    const images = response.data;
    return images;
}
    
catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation',
            position: "topRight",
        });
    }
}