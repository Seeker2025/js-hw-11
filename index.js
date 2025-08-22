import{a as u,i as l,S as m}from"./assets/vendor-DRgUjrIE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),f=document.querySelector(".box");function h(i){let t=null;t=i.map(o=>`
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
        `).join(""),c.insertAdjacentHTML("beforeend",t)}function p(){c.innerHTML=""}function y(){f.style.visibility="visible"}function g(){f.style.visibility="hidden"}document.querySelector(".gallery");const b="https://pixabay.com/api/",v="51186890-e1c8ef6e5ef4b08950db17a2f";function L(i){u.get(b,{params:{key:v,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{t.data.hits.length||l.show({title:"Sorry",message:"There are no images matching your search query. Please try again!",titleColor:"#fff",messageColor:"#fff",color:"#de641a",position:"topRight"}),t.data&&g(),h(t.data.hits),new m("li.gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})}).catch(t=>console.log(t))}const d=document.querySelector(".js_form"),a={};d.addEventListener("submit",w);function w(i){if(i.preventDefault(),p(),new FormData(i.currentTarget).forEach((o,s)=>{a[s]=o}),console.log(a.search),console.log(typeof a.search),a.search===""){l.show({title:"Hey",message:"Enter any word!",titleColor:"#fff",messageColor:"#fff",color:"#b22702",position:"topRight"});return}y(),L(a.search),d.reset()}
//# sourceMappingURL=index.js.map
