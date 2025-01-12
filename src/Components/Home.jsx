import React from "react";
import styles from './Home.module.css';
import SearchForm from "./Search/SearchForm";
import ResultsContainer from "./Results/ResultsContainer";

const Home = () => {
    return <div className={styles.home}>
        <SearchForm/>
        <ResultsContainer/>
    </div>
};

export default Home;