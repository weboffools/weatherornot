import Controller from './controller';

const ctrl = Controller();

let current = ctrl.currentData();
current.then((value) => {
  console.log(value);
});


