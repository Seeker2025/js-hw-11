

import axios from 'axios';
import {getImagesByQuery} from './js/pixabay-api.js'
import {createGallery} from './js/render-functions.js'

const form = document.querySelector('.js_form');
// console.log(form);

const isObj = {};

form.addEventListener('submit', inForm);

function inForm(event){
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name)=>{
        // console.log('value', value);
        // console.log('name', name);
        isObj[name] = value;
        
    })
    console.log(isObj.search);
    console.log(typeof(isObj.search));
    //  if(isObj.search === ''){
    //     console.log('Hi!');
    // }

    getImagesByQuery(isObj.search);
}

