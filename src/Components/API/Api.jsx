export const API_URL = 'https://swapi.py4e.com/api';

export function SEARCH_MOVIES(searchString) {
    return {
      url: API_URL + '/people/?search=' + searchString,
      options: {
        method: 'GET'
      },
    };
  }
  
  export function SEARCH_FILMS(searchString) {
    return {
      url: API_URL + '/films/?search=' +searchString,
      options: {
        method: 'GET'
      },
    };
  }
