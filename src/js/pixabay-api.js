import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const BASIC_URL = 'https://pixabay.com/api/';
const KEY_API = '46224221-307a76b395d66c959be951e41';

export async function fetchImages(query) {
    try {
        const response = await axios.get(BASIC_URL, {
            params: {
                key: KEY_API,
                q: query,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
            }
        });

        const images = response.data.hits;
                if (images.length === 0) {
                    iziToast.error({
                        title: 'Error',
                        message: `Sorry, there are no images matching your search ${query}. Please try again!`,
                        position: "topRight",
                    });
                    return [];
                }
        return images;
    }
        
    catch (error) {
            iziToast.error({
                title: 'Error',
                message: 'Illegal operation',
                position: "topRight",
            });
            return [];
        }
    }