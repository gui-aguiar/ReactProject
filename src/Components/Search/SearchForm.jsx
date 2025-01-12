import React from "react";
import Radio from "../Form/Radio";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from './SearchForm.module.css';

const SearchForm = () => {
    const [searchKey, setKey] = React.useState('People');
    const [searchString, setSearchString] = React.useState('');
    const [buttonEnabled, setEnabled] = React.useState('');

    // colocar eles dentro de uma div pra estilizar? mudar o estilo de cada um deles? 
    // e Aqle texto ali eu faço como ?  e pq só o radio tem que estar em uma div? mas blz.... 
    // agora esta tudo certo
    return <form className={styles.SearchForm}>          
      <label className={styles.label}>What are you searching for?</label>
        <div>            
            <Radio options={['People', 'Movies']} value={searchKey} setValue={setKey} />
        </div>            
        <Input 
            id="searchString" 
            placeholder={`e.g. ${searchKey === 'People' ? 'Chewbacca, Yoda, Boba Fett' : 'Star Wars, Rogue One'}`}   // pq eu nao faço uma funcao pra trocar o placeholder?
            value={searchString} 
            setValue={setSearchString} 
        />
        <Button id="buttonSearch" disabled={!searchString.trim()} label="SEARCH"/>  
    </form>;  // no botao, uma funcao pra trocar o search no action do form 
  };
  
  export default SearchForm;

  // usar form ou nao? 
  // nao sei se uso um form pq ai o content type nao é json ne?
  // é meio estranho isso sei la, teria que ver como el fez aqle POST
