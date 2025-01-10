import React from "react";
import Radio from "./Form/Radio";
import Input from "./Form/Input";
import Button from "./Form/Button";
import styles from './SearchForm.module.css';

const SearchForm = () => {
    const [searchString, setSearchString] = React.useState('');
    const [searchKey, setKey] = React.useState('People');

    return <div className={styles.SearchForm}>
        Meu texto
        <Radio options={['People', 'Movies']} value={searchKey} setValue={setKey}/>
        <Input id="searchString" label="" value={searchString} setValue={setSearchString} required />
        <Button/>
    </div>;
  };
  
  export default SearchForm;
  // agora preciso estilizar essee fdp