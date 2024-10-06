import{a as S,i as n,S as q}from"./assets/vendor-CRCB-GUD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const P="https://pixabay.com/api/",M="46224221-307a76b395d66c959be951e41";async function m(r,t=1){try{return(await S.get(P,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch{n.error({title:"Error",message:"Illegal operation",position:"topRight"})}}function g(r){const t=document.querySelector(".gallery");t.innerHTML="";const o=r.map(i=>`
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
    `).join("");t.insertAdjacentHTML("beforeend",o)}const p=document.querySelector(".loader-container"),y=document.querySelector(".load-more");function L(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}function R(){y.classList.remove("hidden")}function h(){y.classList.add("hidden")}let a,l=1,w="",u=0,c=0;const f=document.querySelector(".js-search-form"),E=document.querySelector(".gallery"),I=document.querySelector(".load-more");f.addEventListener("submit",$);async function $(r){r.preventDefault();const t=f.elements.searchInput.value.trim();if(t===""){n.warning({message:"Please fill in the field",position:"topRight"});return}w=t,l=1,c=0,E.innerHTML="",h(),L();try{const o=await m(t,l);u=o.totalHits,c+=o.hits.length,o.hits.length>0?(g(o.hits),A(),v()):n.info({message:"Sorry, there are no images matching your search query. Please try again",position:"topRight"})}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again",position:"topRight"})}b(),f.reset()}I.addEventListener("click",O);async function O(){l+=1,L(),h();try{const r=await m(w,l);if(r.hits.length>0&&(c+=r.hits.length,g(r.hits),a.refresh(),v()))return}catch{n.error({title:"Error",message:"An error occurred while fetching images. Please try again",position:"topRight"})}b()}function v(){c>=u&&u!==0?(h(),n.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"})):R()}function A(){a?a.refresh():a=new q(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=index.js.map
