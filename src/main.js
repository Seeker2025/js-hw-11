import axios from 'axios';
import {getImagesByQuery} from './js/pixabay-api.js'
import {createGallery, clearGallery, showLoader} from './js/render-functions.js'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.js_form');
// const loader = document.querySelector('.box');
// console.log(form);

const isObj = {};

form.addEventListener('submit', inForm);

function inForm(event){
    event.preventDefault();
    
    clearGallery();
    
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name)=>{
        // console.log('value', value);
        // console.log('name', name);
        isObj[name] = value;
        
    })
    console.log(isObj.search);
    console.log(typeof(isObj.search));
     if(isObj.search === ''){
        // console.log('Hi!');
    
        iziToast.show({
            title: 'Hey',
            message: 'Enter any word!',
            titleColor: '#fff',
            messageColor: '#fff',
            color: '#b22702', // blue, red, green, yellow
            position: 'topRight', // bottomRight, bottomLeft, topLeft, topCenter, bottomCenter, center
        });
    return;

    }
    showLoader();
    getImagesByQuery(isObj.search);
    form.reset();
}

