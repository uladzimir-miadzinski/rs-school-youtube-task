import { drawSnippets } from '../drawer';

export const searchLineSelector = '[data-component="search-line"]';
export const searchBtnSelector = '[data-component="search-btn"]';
export const youtubeApiKey = 'AIzaSyArb00ECe-Wj0_B1YQrfunFGjQ4DKatpNU';

export const search = query => {
  const fetchResults = fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&type=video&part=snippet&maxResults=15&q=${query}`);

  return fetchResults.then(res => res.json());
};

export const searchAndDraw = async (query) => drawSnippets((await search(query)).items);

export const searchLineKeypressHandler = async (event) => {
  if (event.code === 'Enter') {
    event.preventDefault();
    await searchAndDraw(event.target.value);
  }
};

export const searchBtnClickHandler = async (event) => {
  const searchLine = document.querySelector(searchLineSelector);

  event.preventDefault();
  await searchAndDraw(searchLine.value);
};

export const bindSearchComponentEvents = () => {
  const searchLine = document.querySelector(searchLineSelector);
  const searchBtn = document.querySelector(searchBtnSelector);

  searchBtn.addEventListener('click', searchBtnClickHandler);
  searchLine.addEventListener('keypress', searchLineKeypressHandler);
};
