import{a as u,i as c,S as g}from"./assets/vendor-DRgUjrIE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f=document.querySelector(".gallery"),d=document.querySelector(".box");function h(i){let e=null;e=i.map(o=>`
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
        `).join(""),f.insertAdjacentHTML("beforeend",e)}function y(){f.innerHTML=""}function p(){d.style.visibility="visible"}function b(){d.style.visibility="hidden"}document.querySelector(".gallery");const v="https://pixabay.com/api";let n=1;const L="51186890-e1c8ef6e5ef4b08950db17a2f";function w(i){u.get(v,{params:{key:L,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:40}}).then(e=>{console.log(e.data.hits),console.log(e.data.hits.length),e.data.hits.length||c.show({title:"Sorry",message:"There are no images matching your search query. Please try again!",titleColor:"#fff",messageColor:"#fff",color:"#de641a",position:"topRight"}),e.data&&b(),h(e.data.hits),n=1,console.log("myPage",n),new g("li.gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})}).catch(e=>console.log(e))}const m=document.querySelector(".js_form"),a={};m.addEventListener("submit",_);function _(i){if(i.preventDefault(),y(),new FormData(i.currentTarget).forEach((o,s)=>{a[s]=o}),console.log(a.search),console.log(typeof a.search),a.search===""){c.show({title:"Hey",message:"Enter any word!",titleColor:"#fff",messageColor:"#fff",color:"#b22702",position:"topRight"});return}p(),w(a.search),m.reset()}
//# sourceMappingURL=index.js.map
