import{a as f,i as n,S as d}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="46224221-307a76b395d66c959be951e41";async function g(s){try{const o=(await f.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;return o.length===0?(n.error({title:"Error",message:`Sorry, there are no images matching your search ${s}. Please try again!`,position:"topRight"}),[]):o}catch{return n.error({title:"Error",message:"Illegal operation",position:"topRight"}),[]}}function h(s){const t=document.querySelector(".gallery");t.innerHTML="";const o=s.map(i=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${i.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${i.webformatURL}" 
                    alt="${i.tags}" 
                    loading="lazy"
                />
                <div class="image-info">
                    <p class="info-item"><b>Likes:</b> ${i.likes}</p>
                    <p class="info-item"><b>Views:</b> ${i.views}</p>
                    <p class="info-item"><b>Comments:</b> ${i.comments}</p>
                    <p class="info-item"><b>Downloads:</b> ${i.downloads}</p>
                </div>
            </a>
        </li>
    `).join("");t.insertAdjacentHTML("beforeend",o)}const u=document.querySelector(".loader-container");function y(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}let l;const c=document.querySelector(".js-search-form"),L=document.querySelector(".gallery");c.addEventListener("submit",w);async function w(s){s.preventDefault();const t=c.elements.searchInput.value.trim();if(t===""){n.warning({message:"Please fill in the field",position:"topRight"});return}L.innerHTML="",y();try{const o=await g(t);o.length>0&&(h(o),S())}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again",position:"topRight"})}b(),c.reset()}function S(){l?l.refresh():l=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
