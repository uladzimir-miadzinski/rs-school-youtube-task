export const getSearchLine = () => {
  const input = document.createElement('input');

  input.dataset.component = 'search-line';
  input.classList.add('form-control');
  input.placeholder = 'Enter query';

  return input;
};

export const getSearchBtn = (btnText = 'Search') => {
  const btn = document.createElement('button');

  btn.dataset.component = 'search-btn';
  btn.classList.add('btn', 'btn-primary', 'btn-block');
  btn.innerText = btnText;

  return btn;
};
