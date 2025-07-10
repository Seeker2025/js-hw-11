import{S as l,a as c}from"./assets/vendor-BMS3FAYS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=document.querySelector(".gallery");function m(a){let t=null;return t=a.map(o=>`
     <li class="gallery_item">
         <a href="${o.largeImageURL}">
            <img class="img_itm" src="${o.webformatURL}" alt="${o.tags}" title="">
         </a>
         <div class="block">
            <div class="one_item">
               <h2>Likes</h2>
               <p>${o.likes}</p>
            </div>

            <div class="one_item">
               <h2>View</h2>
               <p>${o.views}</p>
            </div>

            <div class="one_item">
               <h2>Comments</h2>
               <p>${o.comments}</p>
            </div>

            <div class="one_item">
               <h2>Downloads</h2>
               <p>${o.downloads}</p>
            </div>
         </div>      
     </li>   
        `).join(""),d.insertAdjacentHTML("beforeend",t)}new l("li.gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0});document.querySelector(".gallery");const u="51186890-e1c8ef6e5ef4b08950db17a2f";function f(a){c.get("https://pixabay.com/api",{params:{key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{console.log(t.data.hits),m(t.data.hits),new l("li.gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})}).catch(t=>console.log(t))}const p=document.querySelector(".js_form"),s={};p.addEventListener("submit",g);function g(a){a.preventDefault(),new FormData(a.currentTarget).forEach((o,i)=>{s[i]=o}),console.log(s.search),console.log(typeof s.search),f(s.search)}
//# sourceMappingURL=index.js.map
