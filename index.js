import{a as v,i as n,S as q}from"./assets/vendor-CRCB-GUD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const P="https://pixabay.com/api/",R="46224221-307a76b395d66c959be951e41";async function g(o,r=1){try{const t=(await v.get(P,{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data;return t.hits.length===0&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t}catch{n.error({title:"Error",message:"Illegal operation",position:"topRight"})}}function m(o){const r=document.querySelector(".gallery");r.innerHTML="";const i=o.map(t=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${t.webformatURL}" 
                    alt="${t.tags}" 
                    loading="lazy"
                />
                <div class="image-info">
                    <p class="info-item"><b>Likes:</b> ${t.likes}</p>
                    <p class="info-item"><b>Views:</b> ${t.views}</p>
                    <p class="info-item"><b>Comments:</b> ${t.comments}</p>
                    <p class="info-item"><b>Downloads:</b> ${t.downloads}</p>
                </div>
            </a>
        </li>
    `).join("");r.insertAdjacentHTML("beforeend",i)}const p=document.querySelector(".loader-container"),y=document.querySelector(".load-more");function L(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}function E(){y.classList.remove("hidden")}function h(){y.classList.add("hidden")}let a,l=1,w="",u=0,c=0;const f=document.querySelector(".js-search-form"),M=document.querySelector(".gallery"),I=document.querySelector(".load-more");f.addEventListener("submit",$);async function $(o){o.preventDefault();const r=f.elements.searchInput.value.trim();if(r===""){n.warning({message:"Please fill in the field",position:"topRight"});return}w=r,l=1,c=0,M.innerHTML="",h(),L();try{const i=await g(r,l);u=i.totalHits,c+=i.hits.length,i.hits.length>0?(m(i.hits),A(),S()):n.info({message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"})}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again",position:"topRight"})}b(),f.reset()}I.addEventListener("click",O);async function O(){l+=1,L(),h();try{const o=await g(w,l);if(o.hits.length>0&&(c+=o.hits.length,m(o.hits),a.refresh(),S()))return}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again",position:"topRight"})}b()}function S(){c>=u&&u!==0?(h(),n.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"})):E()}function A(){a?a.refresh():a=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
