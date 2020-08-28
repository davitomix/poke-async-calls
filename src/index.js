import { getBooks, addBook, removeBook } from './fetchAsync/bookApi';

getBooks().then(book => console.log(book));

const newBook = {
  title: 'xxxxx',
  author: 'xxxx',
  category: 'xxx',
  pages: 'xxxxx',
  progress: 'xxxx',
};

const updateBook = {
  id: 11,
  title: 'uuuuuu',
  author: 'uuuuuu',
  category: 'uuuuuu',
  pages: 'uuuuuu',
  progress: 'uuuuuu',
};

// const add = addBook(newBook);

// const update = addBook(updateBook);

// const remove = removeBook(9);
