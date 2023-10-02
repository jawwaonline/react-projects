// import {
//   FACTS_API_URL,
//   IMAGE_API_URL,
//   IMAGE_API_URL_PREFIX,
//   IMAGE_API_URL_APPENDIX
// } from './constants';

const FACTS_API_URL = 'https://catfact.ninja/fact';
const IMAGE_API_URL = 'https://cataas.com';
const IMAGE_API_URL_PREFIX = '/cat/says/';
const IMAGE_API_URL_APPENDIX = '?size=50&color=red&json=true';

export async function getFactsOne() {
  const response = await fetch(FACTS_API_URL);
  // ERROR HANDLING HAS TO BE INTEGRATED
  const json = await response.json();
  const catFact = json.fact;
  const queryword = catFact.split(' ').splice(0, 1);
  return { catFact, queryword };
}

export async function getFactsRandom() {
  const response = await fetch(FACTS_API_URL);
  // ERROR HANDLING HAS TO BE INTEGRATED
  const json = await response.json();
  const catFact = await json.fact;
  const queryword = await getRandomWordOfText(catFact);

  return { catFact, queryword };
}

export function getRandomWordOfText(text) {
  const textArray = text.split(' ');
  const textArrayLength = textArray.length;
  const randomArrayNumber = Math.floor(
    Math.random() * textArrayLength
  );
  const RandomWord = textArray.splice(randomArrayNumber - 1, 1);
  return RandomWord;
}

export async function getImageUrl(queryword) {
  try {
    const response = await fetch(
      IMAGE_API_URL +
        IMAGE_API_URL_PREFIX +
        queryword +
        IMAGE_API_URL_APPENDIX
    );
    const json = await response.json();
    const ImageUrl = IMAGE_API_URL + json.url;
    const Status = { Okay: ImageUrl };
    return { ImageUrl, Status };
  } catch (error) {
    const Status = { Error: error };
    return { Status };
  }
}
