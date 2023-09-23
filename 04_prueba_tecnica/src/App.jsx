import { useEffect, useRef, useState } from 'react';
import {
  getFactsOne,
  getFactsRandom,
  getRandomWordOfText,
  getImageUrl,
} from './assets/library/brain';

// TODO CREATING CONSTANTS FILE
const FACTS_API_URL = 'https://catfact.ninja/fact';
const IMAGE_API_URL = 'https://cataas.com';
const IMAGE_API_URL_PREFIX = '/cat/says/';
const IMAGE_API_URL_APPENDIX = '?size=50&color=red&json=true';

// TODO CREATE OWN HOOKS !!!!!!!

export default function App() {
  const [facts, setFacts] = useState();
  const [queryword, setQueryWord] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const Error = useRef(false);

  // CREATING HOOKS GETTINGSETTINGIMAGEURL

  const gettingSettingImageUrl = () => {
    getImageUrl(queryword).then((response) => {
      if (response.Status.Okay) {
        Error.current = false;
        setImageUrl(url);
      } else {
        console.log('There has been an Error ' + response.Status.Error);
        Error.current = true;
      }
    });
  };

  // CREATING HOOKS GETTINGSETTINGIMAGEURL

  const gettingSettingCatFact = () => {
    getFactsRandom().then(({ catFact, queryword }) => {
      setFacts(catFact);
      setQueryWord(queryword);
    });
  };

  useEffect(() => {
    gettingSettingCatFact();
  }, []);

  useEffect(() => {
    if (!queryword) return;
    gettingSettingImageUrl();
  }, [facts]);

  return (
    <div className="h-screen w-screen bg-slate-400 flex flex-col">
      <section className="bg-slate-900 max-w-[600px] mx-auto h-full px-10">
        <header className="outline-dotted outline-red-400 mx-auto mt-10 p-5">
          <h1 className="text-yellow-600 text-3xl font-bold text-center">
            Kitten Api
          </h1>
        </header>
        <main className="flex flex-col">
          <p className="text-white my-10">{facts}</p>
          <span className="text-white text-center my-10 py-2 bg-orange-500 rounded-xl w-full">
            {queryword}
          </span>
          <article className="flex flex-row justify-between">
            <button
              className="bg-orange-300 rounded-lg py-2 px-5"
              onClick={gettingSettingImageUrl}
            >
              new Cat Image
            </button>
            <button
              className="bg-orange-300 rounded-lg py-2 px-5"
              onClick={gettingSettingCatFact}
            >
              new Cat Fact{' '}
            </button>
          </article>
          <img src={imageUrl} className="w-full h-auto rounded-lg mt-10" />
        </main>
        <div className="text-2xl text-red-600 font-bold flex justify-center">
          {Error ? <p>ERROR !!!!!</p> : <p></p>}
        </div>
      </section>
    </div>
  );
}
