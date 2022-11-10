// Ejercicio 1.Servidor

'use strict';

//Fetch
const kittenLS = JSON.parse(localStorage.getItem('kittensList'));

if (kittenLS !== null) {
  renderKittenList(kittenLS);
} else {
  getKittenList();
}

function getKittenList() {
  const serverUrl = `https://dev.adalab.es/api/kittens/${githubUser}`;
  fetch(serverUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      kittenDataList = data.results;
      console.log(kittenDataList);
      renderKittenList(kittenDataList);
      localStorage.setItem('kittensList', JSON.stringify(kittenDataList));
    })
    .catch((error) => {
      console.error(error);
    });
}

//Completa el código;

//FUNCTIONS

// Function - to lowercase text
const toLowerCaseText = (text) => {
  return text.toLowerCase();
};

//Function - Show / Hide kitten Form (FORM)
function showNewCatForm() {
  NewKittenForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  NewKittenForm.classList.add('collapsed');
}
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (NewKittenForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

//Function - Race not specified
function renderRace(kittenRace) {
  //Cambiamos esta función para que nos devuelva un string de texto y no una etiqueta en sí, ya que un string es lo que necesitamos realmente. FUNCIONA
  if (kittenRace === '') {
    return 'No se ha especificado la raza';
  } else {
    return `${kittenRace}`;
  }
}

//Function - Render kitten object
//(be careful with the order of the parameters in the functions)

function renderKitten(kittenData) {
  const liEl = document.createElement('li');
  liEl.setAttribute('class', 'card');

  const articleEl = document.createElement('article');

  const imgEl = document.createElement('img');
  imgEl.setAttribute('class', 'card_img');
  imgEl.setAttribute('src', kittenData.image);
  imgEl.setAttribute('alt', 'gatito');

  const titleEl = document.createElement('h3');
  const titleText = document.createTextNode(kittenData.name);
  titleEl.appendChild(titleText);
  titleEl.setAttribute('class', 'card_title');

  const subtitleEl = document.createElement('h3');
  const subtitleText = document.createTextNode(renderRace(kittenData.race));
  subtitleEl.appendChild(subtitleText);
  subtitleEl.setAttribute('class', 'card_race');

  const textEl = document.createElement('p');
  const textDesc = document.createTextNode(kittenData.desc);
  textEl.appendChild(textDesc);
  textEl.setAttribute('class', 'card_description');

  liEl.appendChild(articleEl);
  articleEl.appendChild(imgEl);
  articleEl.appendChild(titleEl);
  articleEl.appendChild(subtitleEl);
  articleEl.appendChild(textEl);

  return liEl;

  // return `<li class="card">
  //    <article>      <img
  //       class="card_img"
  //        src="${kittenData.image}"
  //        alt="gatito"
  //      />
  //      <h3 class="card_title">${kittenData.name}</h3>
  //     <h3 class="card_race">${renderRace(kittenData.race)}</h3>
  //     <p class="card_description">
  //     ${kittenData.desc}
  //     </p>
  //   </article>
  //   </li>`;
}

//Function - Render kittens List

// function renderKittenList(KittenArray) {
//   KittenList.innerHTML = '';
//   let i = 0;
//   for (i = 0; i <= KittenArray.length; i++) {
//     KittenList.innerHTML += renderKitten(KittenArray[i]);
//   }
// }

//Otra forma de hacerlo
function renderKittenList(kittenDataList) {
  // KittenList.innerHTML = ''; //comentando esta linea conseguimos que cada vez que se llame a esta función no se machaque nuestro código
  for (let i = 0; i < kittenDataList.length; i++) {
    KittenList.appendChild(renderKitten(kittenDataList[i]));
  }
  console.log(KittenList);
}

//Function - add New Kitten (FORM)

// https://dev.adalab.es/api/kittens/tuusuariodegithub

// {
//   "image": "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
//   "name": "Anastacio",
//   "desc": "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
//   "race": "British Shorthair"
// }

function addNewKitten(ev) {
  ev.preventDefault();
  let photoValue = photoInputForm.value;
  let nameValue = nameInputForm.value;
  let raceValue = raceInputForm.value;
  let descValue = descInputForm.value;

  const newKittenDataObject = {
    image: photoValue,
    name: nameValue,
    race: raceValue,
    desc: descValue,
  };

  // if (photoValue === "" || nameValue === "" || descValue === "") {
  //   labelMessageForm.innerHTML = "Debe rellenar todos los valores";
  // } else {
  // kittenDataList.push(newKittenDataObject);
  // const inputs = document.querySelectorAll(".label_new_kitten");
  // let i = 0;
  // for (i = 0; i < inputs.length; i++) {
  //   inputs[i].value = "";
  // }
  // labelMessageForm.innerHTML = "Mola! Un nuevo gatito en Adalab!";
  // renderKittenList(kittenDataList);
  fetch(`https://dev.adalab.es/api/kittens/${githubUser}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newKittenDataObject),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        kittenDataList.push(newKittenDataObject);
        renderKittenList(kittenDataList);
        localStorage.setItem('kittenDataList', JSON.stringify(kittenDataList));

        const inputs = document.querySelectorAll('.label_new_kitten');
        let i = 0;
        for (i = 0; i < inputs.length; i++) {
          inputs[i].value = '';
        }
        labelMessageForm.innerHTML = '¡Mola! ¡Un nuevo gatito en Adalab!';
      } else {
        labelMessageForm.innerHTML = 'Error. Gatito perdido';
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//Function - Cancel New Kitten (FORM)
function cancelNewKitten(event) {
  event.preventDefault();
  const inputs = document.querySelectorAll('.label_new_kitten');
  let i = 0;
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  NewKittenForm.classList.add('collapsed');
}

//Functions - Search Kittens by info (SEARCH)
function filterKitten() {
  // let list = "";
  const descValue = toLowerCaseText(inputSearchDesc.value);
  const raceValue = toLowerCaseText(inputSearchRace.value);
  const filteredKitten = kittenDataList.filter(
    (eachKitten) =>
      toLowerCaseText(eachKitten.desc).includes(descValue) &&
      toLowerCaseText(eachKitten.race).includes(raceValue)
  );
  renderKittenList(filteredKitten);
}

// console.log(typeof raceValue);
// console.log(raceValue);filter

// if (toLowerCaseText(kittenDataList[0].desc).includes(descValue)) {
//   list = Kitten1;
// }

// if (toLowerCaseText(kittenDataList[1].desc).includes(descValue)) {
//   list += Kitten2;
// }

// if (toLowerCaseText(kittenDataList[2].desc).includes(descValue)) {
//   list += Kitten3;
// }

// KittenList.innerHTML = list;

// arrays filter
// users = users.filter((x) => x.name == 'Mark' && x.address == 'England');

// function filterKittenOnlyRace() {
//   let list = '';
//   const raceValue = toLowerCaseText(inputSearchRace.value);
//   if (toLowerCaseText(kittenDataList[0].race).includes(raceValue)) {
//     list = Kitten1;
//   }

//   if (toLowerCaseText(kittenDataList[1].race).includes(raceValue)) {
//     list += Kitten2;
//   }

//   if (toLowerCaseText(kittenDataList[2].race).includes(raceValue)) {
//     list += Kitten3;
//   }

//   KittenList.innerHTML = list;
// }

// function filterKittenBoth() {
//   let list = '';
//   const descValue = toLowerCaseText(inputSearchDesc.value);
//   const raceValue = toLowerCaseText(inputSearchRace.value);

//   if (
//     toLowerCaseText(kittenDataList[0].desc).includes(descValue) &&
//     toLowerCaseText(kittenDataList[0].race).includes(raceValue)
//   ) {
//     list = Kitten1;
//   }

//   if (
//     toLowerCaseText(kittenDataList[1].desc).includes(descValue) &&
//     toLowerCaseText(kittenDataList[1].race).includes(raceValue)
//   ) {
//     list += Kitten2;
//   }

//   if (
//     toLowerCaseText(kittenDataList[2].desc).includes(descValue) &&
//     toLowerCaseText(kittenDataList[2].race).includes(raceValue)
//   ) {
//     list += Kitten3;
//   }

//   KittenList.innerHTML = list;
// }

//Function - Empty filters (SEARCH)
function emptyFilter() {
  errorMessageSearch.innerHTML = 'Debe rellenar todos los valores, por favor';
}

//EVENTS

//Event - Filter kittens by search (SEARCH)
searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const descValue = toLowerCaseText(inputSearchDesc.value);
  const raceValue = toLowerCaseText(inputSearchRace.value);
  if (descValue === '' && raceValue === '') {
    emptyFilter();
  } else if (descValue !== '' && raceValue === '') {
    filterKitten();
  } else if (descValue === '' && raceValue !== '') {
    filterKitten();
  } else if (descValue !== '' && raceValue !== '') {
    filterKitten();
  }
});

//Event - Show / Hide New Kitten form (FORM)
headerIcon.addEventListener('click', handleClickNewCatForm);

//Event - Add New Kitten (FORM)
addBtn.addEventListener('click', addNewKitten);

//Event - Cancel new kitten (FORM)
cancelBtn.addEventListener('click', cancelNewKitten);

//Mostrar listado gatitos
// renderKittenList(kittenDataList);
