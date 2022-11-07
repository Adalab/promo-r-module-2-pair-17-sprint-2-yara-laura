// Ejercicio 1.Servidor
```json
    {
    "id": "16396904232462016",
    "owner": "adalabdigital",
    "image": "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
    "name": "Anastacio",
    "desc": "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
    "race": "British Shorthair",
    },
```;
function getKittenList() {
  const githubUser = 'garcia-laura';
  const serverUrl = `https://dev.adalab.es/api/kittens/${githubUser}`;
  fetch(serverUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json())
    .then((data) => );
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
  if (kittenRace === '') {
    return '<p class="card_race">No se ha especificado la raza</p>';
  } else {
    return `<h3 class="card_race">${kittenRace}</h3>`;
  }
}

//Function - Render kitten object
//(be careful with the order of the parameters in the functions)

function renderKitten(kittenData) {
  return `<li class="card">
     <article>      <img
        class="card_img"
         src="${kittenData.img}"
         alt="gatito"
       />
       <h3 class="card_title">${kittenData.name}</h3>
      <h3 class="card_race">${renderRace(kittenData.race)}</h3>
      <p class="card_description">
      ${kittenData.desc}
      </p>
    </article>
    </li>`;
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
  KittenList.innerHTML = '';
  for (const kittenObject in kittenDataList) {
    KittenList.innerHTML += renderKitten(kittenDataList[kittenObject]);
  }
}

//Function - add New Kitten (FORM)
function addNewKitten(ev) {
  ev.preventDefault();
  let photoValue = photoInputForm.value;
  let nameValue = nameInputForm.value;
  let raceValue = raceInputForm.value;
  let descValue = descInputForm.value;

  const newKittenDataObject = {
    img: photoValue,
    name: nameValue,
    race: raceValue,
    desc: descValue,
  };

  if (photoValue === '' || nameValue === '' || descValue === '') {
    labelMessageForm.innerHTML = 'Debe rellenar todos los valores';
  } else {
    kittenDataList.push(newKittenDataObject);
    const inputs = document.querySelectorAll('.label_new_kitten');
    let i = 0;
    for (i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
    labelMessageForm.innerHTML = 'Mola! Un nuevo gatito en Adalab!';
    renderKittenList(kittenDataList);
  }
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
}

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
renderKittenList(kittenDataList);
