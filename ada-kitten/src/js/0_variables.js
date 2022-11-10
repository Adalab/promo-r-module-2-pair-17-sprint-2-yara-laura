'use strict';

// CONSTANTS

//Kitten info 1
// const kittenData_1 = {
//   img: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
//   name: 'anastacio',
//   race: 'British Shorthair',
//   desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
// };

//Kitten info 2
// const kittenData_2 = {
//   img: 'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
//   name: 'fiona',
//   race: '',
//   desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
// };

//Kitten info 3
// const kittenData_3 = {
//   img: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
//   name: 'cielo',
//   race: 'British Shorthair',
//   desc: 'Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
// };

// const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];
let kittenDataList = [];

//Kitten LI elements
// const Kitten1 =
//   //   '<li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" /><h3 class="card_title">Anastacio</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie lemoleste. Es una maravilla acariciarle!</p></article></li>';
//   `<li class="card"><article><img class="card_img" src="${
//     kittenDataList[0].img
//   }" alt="gatito" /><h3 class="card_title">${
//     kittenDataList[0].name
//   }</h3>${renderRace(kittenDataList[0].race)}<p class="card_description">${
//     kittenDataList[0].desc
//   }</p></article></li>`;

// const Kitten2 =
//   // '<li class="card"><img class="card_img"src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" /><h3 class="card_title">Fiona</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';
//   `<li class="card"><article><img class="card_img" src="${
//     kittenDataList[1].img
//   }" alt="gatito" /><h3 class="card_title">${
//     kittenDataList[1].name
//   }</h3>${renderRace(kittenDataList[1].race)}<p class="card_description">${
//     kittenDataList[1].desc
//   }</p></article></li>`;

// const Kitten3 =
//   // '<li class="card"><img class="card_img"src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"alt="gatito" /><h3 class="card_title">Cielo</h3><h4 class="card_race">British Shorthair</h4><p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.Es una maravilla acariciarle!</p></li>';
//   `<li class="card"><img class="card_img" src="${
//     kittenDataList[2].img
//   }" alt="gatito" /><h3 class="card_title">${
//     kittenDataList[2].name
//   }</h3><h4 class="card_race">${renderRace(
//     kittenDataList[2].race
//   )}</h4><p class="card_description">${kittenDataList[2].desc}</p></li>`;

//HTML DOM ELEMENTS RETRIEVED

//List
let githubUser = 'garcia-laura';
const KittenList = document.querySelector('.js-list');

//Search
const inputSearchDesc = document.querySelector('.js_in_search_desc');
const inputSearchRace = document.querySelector('.js_in_search_race');
const searchButton = document.querySelector('.js_in_search_button');
const errorMessageSearch = document.querySelector('.js_label_in_search_error');

//Form
const headerIcon = document.querySelector('.js-icon');
const NewKittenForm = document.querySelector('.js-new-form');
const descInputForm = document.querySelector('.js-input-desc');
const photoInputForm = document.querySelector('.js-input-photo');
const nameInputForm = document.querySelector('.js-input-name');
const raceInputForm = document.querySelector('.js-input-race');
const addBtn = document.querySelector('.js-btn-add');
const cancelBtn = document.querySelector('.js-cancel-button');
const labelMessageForm = document.querySelector('.js-label-message');
