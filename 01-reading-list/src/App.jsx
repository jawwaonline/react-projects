import BookData from './helpers/booksData';
import { useState } from 'react';

export default function App() {
  const BooksData = BookData();

  const [Books, setBooks] = useState(BooksData);
  const [Modal, setModal] = useState(false);
  const [ModalInfo, setModalInfo] = useState(null);

  // CREATING A FUNCTION TO ADD BOOK TO FAVORITES OR SET FAVORITES OF THIS BOOK
  // WHY DOES THIS WORK ???????
  // TODO HANDLE IT WITH OTHER BUTTON
  function setFavorite(ISBN) {
    const currentBook = findBook(ISBN);
    currentBook.favorite = !currentBook.favorite;
    setBooks([...Books]);
    console.log(Books);
  }

  // FINDING MORE BOOK INFOS
  function findBook(ISBN) {
    const currentBook = Books.find((Book) => Book.ISBN === ISBN);
    return currentBook;
  }

  // HANDLECLICK
  function handleclick({ ISBN }) {
    setModal(true);
    const currentBook = findBook(ISBN);
    setModalInfo({ ...currentBook });
    setFavorite(ISBN);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <section className="w-[80%] flex-col mx-auto">
        <h3 className="text-3xl sm:text-base text-center my-5">
          {' '}
          Hello World
        </h3>

        {/* -------------- BOOKLIST -------------- */}

        <div
          className={`grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-10  ${
            Modal ? 'blur-lg' : 'blur-none'
          }`}
        >
          {Books.map(({ ISBN, cover, title }) => {
            return (
              // ------------- ONE BOOK ARTICLE -------------

              <article
                className="relative group flex flex-col h-full items-center transition-all bg-white rounded-lg hover:scale-105 shadow-slate-700 shadow-xl p-5 "
                key={ISBN}
              >
                <button
                  onClick={() => {
                    handleclick({ ISBN });
                  }}
                  type="button"
                  className="opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-10 transition duration-500 ease-in-out absolute top-14 right-4"
                >
                  click
                </button>
                <img
                  className="h-40 relative object-cover items-center mb-0 ease-in-out duration-300 group-hover:scale-110  shadow-slate-700 shadow-2xl"
                  src={cover}
                />
                <p className="relative flex-1 text-center mt-6">
                  {title}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* -------------- MODAL -------------- */}

      {Modal && (
        <article
          prop={{ ModalInfo }}
          onClick={closeModal}
          className={`bg-white  opacity-90 top-[10vw]  left-[10vw] fixed h-[80vh] w-[80vw] rounded-lg z-30 transition-all duration-700' 
           `}
        >
          <header className=" relative font-bold text-3xl flex-1 text-right mr-5 mt-5 justify-end">
            <button onClick={closeModal}>X</button>
          </header>
          <main className="p-6 flex-col flex h-full ">
            <h2 className="font-bold text-center">
              {ModalInfo?.title}
            </h2>

            <p className="text-zinc-500 text-xs  text-center">
              by{' '}
              <span className="italic  text-sm text-zinc-800">
                {ModalInfo?.author?.name}
              </span>
            </p>
            <div className="flex gap-5 justify-center mb-10">
              <p className="mt-5 text-zinc-500 text-xs">
                Year{' '}
                <span className=" text-zinc-800 italic text-sm">
                  {ModalInfo?.year}
                </span>
              </p>

              <p className="mt-5 text-zinc-500 text-xs ">
                Genre{' '}
                <span className=" text-zinc-800 italic text-sm">
                  {ModalInfo?.genre}
                </span>
              </p>
              <p className="mt-5 text-zinc-500 text-xs">
                Pages{' '}
                <span className=" text-zinc-800 italic text-sm">
                  {ModalInfo?.pages}
                </span>
              </p>
            </div>
            <p className="mx-10 text-zinc-800 italic text-sm">
              {ModalInfo?.synopsis}
            </p>
            <div className=" flex-1 flex justify-center">
              <p className="align-bottom">
                favorite ? {ModalInfo?.favorite ? 'yes' : 'no'}
              </p>
            </div>
          </main>
        </article>
      )}
    </>
  );
}
