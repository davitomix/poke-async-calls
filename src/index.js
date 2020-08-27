import { getBooks } from './fetchAsync/bookApi';

const books = getBooks().then(book => console.log(book));
