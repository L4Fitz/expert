import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import dataRestaurant from "../DATA.json";

const listContent = document.querySelector(".content");
let listRest = "";

dataRestaurant.restaurants.forEach((dataRest) => {
    listRest += `
    <article tabindex="0" id="post" class="post-item">
    <h2 class="post-item-title">${dataRest.city}</h2>
    <img src=${dataRest.pictureID} width="450" alt="${dataRest.name}" />
    <div class="post-item-description">
    <h4>Rating: ${dataRest.rating}</h4>
    <h3>${dataRest.name}</h3>
    <p>${dataRest.description}</p>
    </div>
    </article>
    `;
    listContent.innerHTML = listRest;
});

const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const header = document.querySelector('.header');
const navUl = document.querySelector('navul');

menu.addEventListener('click', (event) => {
    navUl.classList.toggle('open-menu');
    event.stopPropagation();
});

header.addEventListener('click', (event) => {
    navUl.classList.remove('open');
    event.stopPropagation();
});

main.addEventListener('click',(event) => {
    navUl.classList.remove('open');
    event.stopPropagation();
});