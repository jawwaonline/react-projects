import { Slider } from './components/Slider';

function App() {
  const images = [
    {
      url: 'https://imgs.search.brave.com/9FQZpcYQGpsHf5RaEUEAczJ3aX4jgH1o7NuHn8HA8TQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg2LzM3Lzgz/LzM2MF9GXzg2Mzc4/MzMyX2VKempXY2sw/S213aUhJUTNpakpS/Z21IQXBMV2dBWFFl/LmpwZw',
      title: 'image of sunset'
    },
    {
      url: 'https://imgs.search.brave.com/Mpd2Arapsq0uCy1q2JfRwKEWDnKHlKeDVDGUrRS0xx0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/a3ktc3Vuc2V0XzEy/MDMtMTY2Ni5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw',
      title: 'image of sunset 2'
    },
    {
      url: 'https://imgs.search.brave.com/BGrHXJV19tibCbtbGliZsJAHRSSezJEqaK663ld6zq4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTI1/MDE4NTUzL3Bob3Rv/L3NreS1iYWNrZ3Jv/dW5kLW9uLXN1bnNl/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UVlHYWNDeWNx/OHVwSWx1clJoS0ZX/M2lIWG42eW51YmZf/b1d5ZFBrcGd4ND0',
      title: 'image of sunset 2'
    }
  ];

  return (
    <>
      <main className="flex flex-col place-items-center align-middle bg-slate-400 min-w-screen min-h-screen">
        <h2 className="text-red-600 font-bold text-3xl my-4">
          Creating a Slider Component
        </h2>
        <Slider images={images} />
      </main>
    </>
  );
}

export default App;
