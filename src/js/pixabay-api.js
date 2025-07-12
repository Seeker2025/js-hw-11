import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';
const gallery = document.querySelector('.gallery');





import { createGallery, hideLoader } from './render-functions.js'

// console.log(lightbox);

const myApiKey = '51186890-e1c8ef6e5ef4b08950db17a2f';

// axios.defaults.headers.common["Authorization"] = myApiKey;
////example
//// https://pixabay.com/api/?key=51186890-e1c8ef6e5ef4b08950db17a2f&q=yellow+flowers&image_type=photo


export function getImagesByQuery(query){
    axios.get('https://pixabay.com/api', {
  
    params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        }
 }).then(response =>{
   
    console.log(response.data.hits);
    console.log(response.data.hits.length);
    if(!response.data.hits.length){
            iziToast.show({
        title: 'Sorry',
        message: 'There are no images matching your search query. Please try again!',
        titleColor: '#fff',
        messageColor: '#fff',
        color: '#de641a', // blue, red, green, yellow
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
});
    }
    if(response.data){
            hideLoader();
    }
    
    
   createGallery(response.data.hits);
   const lightbox = new SimpleLightbox('li.gallery_item a', {
    
            captionsData: 'alt',    
            captionDelay: 200,    
            animationSpeed: 250,    
            scaleImageToRatio: true,

   });
         })
	      .catch(error => console.log(error));
}

