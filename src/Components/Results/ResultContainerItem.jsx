import React from "react";
import style from "./ResultsContainerItem.module.css";

const ResultsContainerItem = ({ text, fontSize = '16px', extraItem }) => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <span className={style.text} style={{ fontSize }}>
                    {text}
                </span>
                {extraItem && <div className={style.extraItem}>{extraItem}</div>}
            </div>
            <hr className={style.line} />
        </div>
    );
};

export default ResultsContainerItem;

// essa abordagem do parametro ali prece um pouco diferente do resto que eu fiz, entao tenho umas coisas meio estranhas em cada componente
// depois que eu terminar, eu vou tentar fazer isso de uma melhor forma, procurar por inconsistencias no codigo
// e tentar padronizar as coisas 

// exemplo, pq tem uns caras que voltam <> e outros nao? pq em um input eu coloquei isso ? 
// pq eu nao coloquei o disabled igual eu fiz ali no parametro? pq eu nao fiz um ifzao aqui tbm ? 
