import { getBooks, addBook, removeBook } from './fetchAsync/bookApi';

const remove = removeBook(21);
// getBooks().then(book => console.log(book));

const newBook = {
  name: 'aaaa',
  catchphrase: 'xxxx',
};

const updateBook = {
  id: 23,
  name: 'updated',
  catchphrase: 'updated',
};

// const add = addBook(updateBook);
