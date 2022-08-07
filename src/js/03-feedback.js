// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const form = document.querySelector('.feedback-form');
// form.addEventListener('input', throttle(onFormData, 500));
// form.addEventListener('submit', onSubmitForm);

// let formData = {};

// function onFormData(e) {
//   formData[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
//   console.log(e.target.value);
// }

// function onSubmitForm(e) {
//   e.preventDefault();

//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (message.value === '' || email.value === '') {
//     alert(`Всі поля мають бути заповнені!`);
//   } else {
//     e.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);

//     console.log(formData);
//   }
// }

// (function updateDataFromLocalStorage() {
//   let data = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (data) {
//     Object.entries(data).forEach(([key, value]) => {
//       formData[key] = value;
//       form.elements[key].value = value;
//       console.log(data);
//     });
//   }
// })();
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Отправляем форму');

  e.currentTarget.reset();
}

function onTextareaInput(e) {
  const massage = e.currentTarget.value;
  // console.log(massage);
  localStorage.setItem('feedback-form-state', massage);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem('feedback-form-state;');
  console.log(savedMessage);
}
