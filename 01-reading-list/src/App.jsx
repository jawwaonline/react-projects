import BookData from './helpers/booksData';

const Books = BookData();

export default function App() {
  return (
    <>
      <section className="w-[80%] flex-col mx-auto">
        <h3 className="text-3xl text-center"> Hello World</h3>
        <div className="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-10 ">
          {Books.map(({ ISBN, cover, title }) => {
            return (
              <div
                className="flex flex-col h-full items-center transition-all bg-white rounded-lg hover:scale-105 shadow-slate-700 shadow-xl p-5 "
                key={ISBN}
              >
                <img
                  className="h-40 relative object-cover items-center mb-0 ease-in-out duration-300 hover:scale-110 shadow-slate-700 shadow-xl"
                  src={cover}
                />
                <p className="relative flex-1 text-center mt-6">
                  {title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
