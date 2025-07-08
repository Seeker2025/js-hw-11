import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(cont);
 //     <li class="li_itm"><img src="${itm.userImageURL}" alt=""></li>
export function createGallery(images){
    return images.map(itm =>`
     <li class="gallery_item">
  <a href="${itm.largeImageURL}"><img src="${itm.previewURL}" alt="" title=""/></a>
     </li>   
        `
     ).join('');
}

var lightbox = new SimpleLightbox('li.gallery_item a', { /* options */
     captionsData: 'alt',    //get the caption from given attribute
     captionDelay: 200,      //adds a delay before the caption shows (in ms)
     animationSpeed: 250,    //how long takes the slide animation (in ms)
     scaleImageToRatio: true,//scales the image up to the defined ratio size

 });

function clearGallery(){

}

function showLoader(){

}

function hideLoader(){

}