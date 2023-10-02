import mockdata from '../data/mockdata.json';

const fetchedData = mockdata;
export default function BookDataParsed(fetchedData) {
  return mockdata.library.map((book) => {
    return {
      title: book.book.title,
      pages: book.book.pages,
      genre: book.book.genre,
      cover: book.book.cover,
      synopsis: book.book.synopsis,
      year: book.book.year,
      ISBN: book.book.ISBN,
      author: book.book.author
    };
  });
}
