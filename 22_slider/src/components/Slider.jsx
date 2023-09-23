import { useState } from 'react';

export function Slider() {
  const [counter, setcounter] = useState(0);

  function moveonclick() {
    if (counter == 2) {
      setcounter(0);
      return;
    }
    setcounter(counter + 1);
    console.log(counter);
  }

  const position = {
    transform: `translateX(-${counter * 100}%)`
  };

  return (
    <>
      <section className="bg-slate-300 h-96 w-full mt-40 flex flex-col place-items-center">
        <h1>Slider Component</h1>

        <div
          onClick={moveonclick}
          className="slider-wrapper flex outline-4 outline-dotted outline-zinc-700 w-1/2 h-full overflow-hidden"
        >
          {' '}
          <div className="my-auto bg-red-300 absolute z-10 self-center ">
            arrowleft
          </div>
          <div
            style={position}
            className="holding images flex ease-in-out duration-500 transition"
          >
            <img
              className={`object-cover `}
              alt="image of sunset"
              src="https://imgs.search.brave.com/9FQZpcYQGpsHf5RaEUEAczJ3aX4jgH1o7NuHn8HA8TQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg2LzM3Lzgz/LzM2MF9GXzg2Mzc4/MzMyX2VKempXY2sw/S213aUhJUTNpakpS/Z21IQXBMV2dBWFFl/LmpwZw"
            />
            <img
              className={`object-cover `}
              alt="image of sunset"
              src="https://imgs.search.brave.com/Mpd2Arapsq0uCy1q2JfRwKEWDnKHlKeDVDGUrRS0xx0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/a3ktc3Vuc2V0XzEy/MDMtMTY2Ni5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"
            />
            <img
              className={`object-cover `}
              alt="image of sunset"
              src="https://imgs.search.brave.com/BGrHXJV19tibCbtbGliZsJAHRSSezJEqaK663ld6zq4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI1/MDE4NTUzL3Bob3Rv/L3NreS1iYWNrZ3Jv/dW5kLW9uLXN1bnNl/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UVlHYWNDeWNx/OHVwSWx1clJoS0ZX/M2lIWG42eW51YmZf/b1d5ZFBrcGd4ND0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
