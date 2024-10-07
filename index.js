import{a as q,i as n,S as P}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function p(o){const t=document.querySelector(".gallery"),r=o.map(i=>`
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
    `).join("");t.insertAdjacentHTML("beforeend",r)}const y=document.querySelector(".loader-container"),L=document.querySelector(".load-more");function h(){y.classList.remove("hidden")}function g(){y.classList.add("hidden")}function R(){L.classList.remove("hidden")}function m(){L.classList.add("hidden")}const E="https://pixabay.com/api/",I="46224221-307a76b395d66c959be951e41";async function b(o,t=1){try{h();const r=await q.get(E,{params:{key:I,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return g(),r.data}catch{n.error({title:"Error",message:"Illegal operation",position:"topRight"})}}let a,l=1,w="",u=0,c=0;const f=document.querySelector(".js-search-form"),v=document.querySelector(".gallery"),M=document.querySelector(".load-more");f.addEventListener("submit",$);async function $(o){o.preventDefault();const t=f.elements.searchInput.value.trim();if(t===""){n.warning({message:"Please fill in the field",position:"topRight"});return}w=t,l=1,c=0,v.innerHTML="",m(),h();try{const r=await b(t,l);u=r.totalHits,c+=r.hits.length,r.hits.length>0?(p(r.hits),A(),S()):n.info({message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"})}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again",position:"topRight"})}g(),f.reset()}M.addEventListener("click",O);async function O(){l+=1,h(),m();try{const o=await b(w,l);if(o.hits.length>0){p(o.hits),c+=o.hits.length;const t=v.firstElementChild.getBoundingClientRect().height;if(window.scrollBy({top:t*2,behavior:"smooth"}),a.refresh(),S())return}}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again",position:"topRight"})}g()}function S(){c>=u&&u!==0?(m(),n.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"})):R()}function A(){a?a.refresh():a=new P(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
