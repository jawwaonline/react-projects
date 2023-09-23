import { useState } from 'react';

export function Slider({ images, width }) {
  // TODO TYPEDEFINITION IMAGES ARRAY

  const [counter, setcounter] = useState(0);

  function moverightonclick() {
    if (counter == images?.length - 1) {
      setcounter(0);
      return;
    }
    setcounter(counter + 1);
  }

  function moveleftonclick() {
    if (counter == 0) {
      setcounter(2);
      return;
    }
    setcounter(counter - 1);
  }

  const position = {
    transform: `translateX(-${counter * 100}%)`
  };

  return (
    <>
      <section
        className={`slider-wrapper flex justify-center outline-4 outline-dotted relative outline-zinc-700 overflow-hidden ${
          width ? `max-w-[${width}]` : 'max-w-[300px]'
        }`}
      >
        <div
          onClick={moveleftonclick}
          className="my-auto text-4xl absolute z-10 self-center cursor-pointer left-0 "
        >
          ⬅
        </div>
        <div
          onClick={moverightonclick}
          className="my-auto text-4xl absolute z-10 self-center cursor-pointer right-0 "
        >
          ➡
        </div>
        <div
          style={position}
          className="image-holder flex ease-in-out duration-500 transition"
        >
          {images?.map((image) => {
            return (
              <img
                key={image?.url}
                src={image?.url}
                alt={image?.title}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
