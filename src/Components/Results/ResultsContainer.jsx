import React from "react";
import style from "./ResultsContainer.module.css";
import ResultsContainerItem from "./ResultContainerItem";
import Button from "../Form/Button";
import ResultContainerInfo from "./ResultContainerInfo";

const ResultsContainer = ({ results }) => {
    const tste = <Button id="xx" label="View Details" disabled={false}/>  
    return <div className={style.resultsContainer}>
        <ResultsContainerItem text="Results" fontSize="18px" />       
        <ResultContainerInfo text={`There are zero matches. Use the form to search for People or Movies.`}/>
    </div>
};

export default ResultsContainer;


// cara. com ctz tem algum jeito de centralizar essa porra de outra maneiera
// com ctz eu consigo quebrar a porra da linh de algum outro jeito 
