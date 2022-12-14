import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formData = {};
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.textarea'),
// };

form.addEventListener('input', throttle(onTextareaInput, 1000));
form.addEventListener('submit', onFormSubmit);

updateDataLocal();

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// const onTextareaInput = {};

function onFormSubmit(e) {
  e.preventDefault();

  const email = document.querySelector('input');
  const message = document.querySelector('textarea');
  if (email.value === '' || message.value === '') {
    alert(`Всі поля мають бути заповнені!`);
  } else {
    // e.currentTarget.reset();
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
  }
}

function updateDataLocal() {
  let data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    Object.entries(data).forEach(([key, value]) => {
      formData[key] = value;
      form.elements[key].value = value;
      console.log(data);
    });
  }
}
// function onTextareaInput(e) {
//   e.preventDefault();
//   const massage = e.target.value;
//   localStorage.setItem(STORAGE_KEY, massage);
// }

// function populateTextarea() {
//   e.preventDefault();
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     refs.textarea.value = savedMessage;
//   }
