import { getBooks, addBook } from './fetchAsync/bookApi';

getBooks().then(book => console.log(book));

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
