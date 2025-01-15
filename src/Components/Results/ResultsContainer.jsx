import React from "react";
import style from "./ResultsContainer.module.css";
import ResultsContainerItem from "./ResultContainerItem";
import Button from "../Form/Button";
import ResultContainerInfo from "./ResultContainerInfo";

const ResultsContainer = ({ results, searching }) => {
    const infoLabel = searching ? 'Searching...' : "There are zero matches. Use the form to search for People or Movies."
    return <div className={style.resultsContainer}>
        <ResultsContainerItem text="Results" fontSize="18px" />  

        {results.length === 0 && <ResultContainerInfo text={infoLabel} />}     

        {results.length > 0 && results.map((result) => (
            <ResultsContainerItem
            key={result.url }
            text={result.name ? result.name : result.title }
            extraItem={
                <Button id="viewDetails" disabled={false} disabledStyle={false}> 
                View Details
                </Button>
            }
            />
        ))}
    </div>
};

export default ResultsContainer;
