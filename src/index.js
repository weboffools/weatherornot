import Controller from './controller';
import DOM from './dom';
import './style.css';

const body = document.querySelector('body');

function queryFormEvent() {
  const form = document.querySelector('#query-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const loc = e.target.user_input.value;
    body.replaceWith(DOM(loc));
  });
}

body.append(DOM());
queryFormEvent();
