import React,  { useEffect } from "react";  // ele prefere colocar o React na frente quando usa enao importa assim
import Radio from "../Form/Radio";
import Input from "../Form/Input";
import Button from "../Form/Button";
import styles from './SearchForm.module.css';
import { API_URL } from "../API/Api";
import { GlobalContext } from "../../GlobalContext";

const SearchForm = () => {
  const [searching, setSearching] = React.useState(false); 
  const [searchKey, setSearchKey] = React.useState('people');  
  const [searchString, setSearchString] = React.useState('');''
  const [buttonDisabledStyle, setbuttonDisabledStyle] = React.useState(true);
  const [buttonDisabled, setbuttonDisabled] = React.useState(true); 
  
  const globalContext = React.useContext(GlobalContext);

  async function handleClick(event) {
    try
    {
      event.preventDefault();

      setSearching(true);
      let data = await fetch(`${API_URL}/${searchKey}?search=${searchString}`);
      const json = await data.json();
      setSearching(false);

      globalContext.setSearchResult(json.results ? json.results : []);

      //console.log(json);
      return json; 
    } catch (error){
      setSearching(false);
      console.error("Error fetching data", error);
      globalContext.setSearchResult([]);
    }
  }

  // isso aqui é um valor e uma funcao. // o () é o valor inicial 
  // a segunda é a funcao que vai setar o valor que eu passar pra ela na variavel da esquerda 
  // e ai ele sabe que usei aqla funcao e entao ele vai la e atualiza o item 
  
  // sera que eu precisava desse useEffect aqui mesmo? sera que nao tinha uma maneira melhore? 
  // 
    // viadagem pra jogar o foco de vola no input
  useEffect(() => {  
      setbuttonDisabledStyle(!searchString.trim());
      // setButtonDisabled((anterior) => !searchString.trim()); se eu fizer isso eu tenho o valor do estado anterior pra usar na logica ]
      // posso ter uma funcao la dentro do parametro inicial e setar o valor por la 

      // aqui eu posso olhar o estilo tambem e arrumar meu botao 
  }, [searchString]);  // se eu colocar retorno ( que é uma funcao) ele vai executar qdo o item some da tela 

  useEffect(() => {  // precisaria disso ou eu poderia faze de outra forma? como nao é bem a parada que eu estou olhar
    setbuttonDisabled(!searchString.trim() || searching);
  }, [searchString, searching]); // useContext? o useEffect é bom pra quando ele faz as coisas só uma vez 


  useEffect((isSearching) => {
    if(isSearching)
      globalContext.setSearchResult([]);
    
    // trocar o label daquele lugar tambem 
  }, [searching]); 

    // alem disso eu preciso fazer com que o componente saiba que tem que mudar 

  // colocar eles dentro de uma div pra estilizar? mudar o estilo de cada um deles? 
  // e Aqle texto ali eu faço como ?  e pq só o radio tem que estar em uma div? mas blz.... 
  // agora esta tudo certo
  

  // agora eu entendi os inputs. 
  // O botao nao é um input entao a logica dele é um pouco difernte
  // eu tenho que chamar a funcao, estou passando ela pro elemento que colocou isso la dentro
  // sendo assim eu coloco ela no setValeu que tachamando ela com o valor que ta no input, entao, ta tudo certo 
  // ai ele seta aquele valor, atualiza o componente e fica tudo bem 
  //

  return <form className={styles.SearchForm}>          
    <label className={styles.label}>What are you searching for?</label>
      <div>            
          <Radio options={['People', 'Films']} value={searchKey} setValue={setSearchKey}/>
      </div>            
      <Input 
          id="searchString"
          placeholder={`e.g. ${searchKey === 'People' ? 'Chewbacca, Yoda, Boba Fett' : 'Star Wars, Rogue One'}`}   // pq eu nao faço uma funcao pra trocar o placeholder?
          value={searchString}
          setValue={setSearchString}
        
      />
      <Button id="buttonSearch" disabled={buttonDisabled} disabledStyle={buttonDisabledStyle} handleClick={handleClick}>{searching ? "SEARCHING..." : "SEARCH"}</Button>  
  </form>;  // no botao, uma funcao pra trocar o search no action do form 
};
  
  // {setbuttonDisabledStyle = () => {!searchString.trim()}}  ->

  // usar o estado do botao ali,
  // isso pq eu tenho que colocar ele como enabled e disabled
  // mas o enables e disabled com a classe é atraves do search
  // mas os outros alem disso, eles vao manter ou nao a cor 

  export default SearchForm;

  // usar form ou nao? 
  // nao sei se uso um form pq ai o content type nao é json ne?
  // é meio estranho isso sei la, teria que ver como el fez aqle POST



  // SE EU MUDO O VALOR LA DO ESTADO , ele nao faz a reatividade, preciso fazer pela porra da funcao mesmo 