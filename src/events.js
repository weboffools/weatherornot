import Controller from './controller';
import DOM from './dom';

export default function queryFormEvent() {
  const form = document.querySelector('#query-form');

  form.addEventListener('submit', (e) => {
    const loc = e.target.user_input.value;
    Controller().getUserLocation(loc);
    DOM();

  });
}
