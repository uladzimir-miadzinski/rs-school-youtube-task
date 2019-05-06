import { getSearchBtn, getSearchLine } from '../search';

export const getContainer = () => {
  const container = document.createElement('div');

  container.classList.add('container-fluid');

  return container;
};

export const getRow = () => {
  const row = document.createElement('div');

  row.classList.add('row');

  return row;
};

export const getColumn = (size) => {
  const col = document.createElement('div');
  const colClass = size
    ? `col-${size}`
    : 'col';

  col.classList.add(colClass);

  return col;
};

export const drawSearchComponent = () => {
  const root = document.querySelector('body');
  const container = root.appendChild(getContainer());
  const row = container.appendChild(getRow());

  const firstCol = row.appendChild(getColumn(10));
  const secondCol = row.appendChild(getColumn(2));

  firstCol.appendChild(getSearchLine());
  secondCol.appendChild(getSearchBtn());

  root.style.paddingTop = '15px';
};

export const getSnippet = (item) => {
  const {
    snippet: {
      channelTitle,
      description,
      title,
      thumbnails
    },
    id: { videoId }
  } = item;

  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = thumbnails.high.url;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardBodyTitle = document.createElement('h5');
  cardBodyTitle.classList.add('card-title');
  cardBodyTitle.innerText = title;

  const cardBodyDescription = document.createElement('p');
  cardBodyDescription.classList.add('card-text');
  cardBodyDescription.innerText = description;

  const linkToVideo = document.createElement('a');
  linkToVideo.classList.add('btn', 'btn-secondary');
  linkToVideo.innerText = `Link to ${channelTitle}`;
  linkToVideo.setAttribute('href', `https://www.youtube.com/watch?v=${videoId}`);
  linkToVideo.setAttribute('target', '_blank');

  cardBody.appendChild(cardBodyTitle);
  cardBody.appendChild(cardBodyDescription);
  cardBody.appendChild(linkToVideo);
  card.appendChild(img);
  card.appendChild(cardBody);
  card.classList.add('m-1');

  return card;
};

export const drawSnippets = (items) => {
  const container = document.querySelector('body > div.container-fluid');
  const searchSnippets = document.querySelector('[data-container="search-snippets"]');

  const row = getRow();
  row.dataset.container = 'search-snippets';
  row.classList.add('mt-2');

  items.forEach(item => {
    const col = getColumn(3);

    col.appendChild(getSnippet(item));
    row.appendChild(col);
  });

  if (searchSnippets) {
    container.replaceChild(row, searchSnippets);
  } else {
    container.appendChild(row);
  }
};
