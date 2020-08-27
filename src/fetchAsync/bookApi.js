import { handleResponse, handleError } from './apiUtils';
const baseUrl = 'http://localhost:3000/api/v1/characters';

export const getBooks = async () => {
  try {
    const response = await fetch(baseUrl);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

const addBook = book => {};
