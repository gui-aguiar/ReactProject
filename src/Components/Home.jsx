import React from "react";
import styles from './Home.module.css';
import SearchForm from "./SearchForm";

const Home = () => {
    return <div className={styles.home}>
        Aqui provavelmente eu vou ter um estilo pra essa div
        e dentro dela, eu tenho os dois componentes que vou fazer
        <SearchForm/>
    </div>
};

export default Home;