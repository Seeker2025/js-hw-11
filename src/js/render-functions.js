import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

// console.log(cont);
 //     <li class="li_itm"><img src="${itm.userImageURL}" alt=""></li>
export function createGallery(images){
   
          let arr = null;
     arr = images.map(itm =>`
     <li class="gallery_item">
         <a href="${itm.largeImageURL}">
            <img class="img_itm" src="${itm.webformatURL}" alt="${itm.tags}" title="">
         </a>
         <div class="block">
            <div class="one_item">
               <h2>Likes</h2>
               <p>${itm.likes}</p>
            </div>

            <div class="one_item">
               <h2>View</h2>
               <p>${itm.views}</p>
            </div>

            <div class="one_item">
               <h2>Comments</h2>
               <p>${itm.comments}</p>
            </div>

            <div class="one_item">
               <h2>Downloads</h2>
               <p>${itm.downloads}</p>
            </div>
         </div>      
     </li>   
        `
     ).join('');
     return  gallery.insertAdjacentHTML('beforeend', arr);
    
}

 export const lightbox = new SimpleLightbox('li.gallery_item a', {
     captionsData: 'alt',    
     captionDelay: 200,    
     animationSpeed: 250,    
     scaleImageToRatio: true,

 });



  



function clearGallery(){

}

function showLoader(){

}

function hideLoader(){

}