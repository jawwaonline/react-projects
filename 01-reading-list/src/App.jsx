import BookData from './helpers/booksData';

const Books = BookData();

export default function App() {
  return (
    <>
      <h3 className="text-3xl"> Hello World</h3>
      <div className="grid grid-cols-3 gap-5 absolute">
        {Books.map((book) => {
          return (
            <div
              className="flex flex-col h-full items-center transition-all "
              key={book.ISBN}
            >
              <p className="relative flex-1 mt-0">{book.title}</p>
              <img
                className="h-40 relative object-cover items-center mb-0 rounded-md hover:scale-125 shadow-slate-700 shadow-xl"
                src={book.cover}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
