import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [searchResult, setSearchResult] = React.useState([]);

  return (
    <GlobalContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </GlobalContext.Provider>
  );
};
