import React from "react";
import styles from './Home.module.css';
import SearchForm from "./Search/SearchForm";
import ResultsContainer from "./Results/ResultsContainer";
import { GlobalContext } from "../GlobalContext";

const Home = () => {
    const globalContext = React.useContext(GlobalContext);
    return <div className={styles.home}>
        <SearchForm/>
        <ResultsContainer results={globalContext.searchResult}/>
    </div>
};

export default Home;