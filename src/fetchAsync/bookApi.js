import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3000/api/v1/characters/';

export const getBooks = async () => {
  try {
    const response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export const addBook = async book => {
  try {
    const response = await fetch(baseUrl + (book.id || ''), {
      method: book.id ? 'PUT' : 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        ...book,
        id: parseInt(book.id, 10),
      }),
    });
    return handleResponse(response);
  } catch (error) {
    return handleError(errro);
  }
};
