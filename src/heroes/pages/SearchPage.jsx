import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import {HeroCard} from "../components/HeroCard"
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";


export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const {q=""} = query;
  const {searchText, onInputChange} = useForm({searchText: q});
 const heroesList = getHeroByName({name: q});
 
 
 const onSearchSubmit = (event) => {
   event.preventDefault();
   if(searchText.trim().length <= 1) return;
   navigate(`?q=${searchText}`)         
 }

 const noInfo = (
  <div className="alert alert-danger">
              {`No results for ${q}`}
            </div>    
 )

 const inicialInfo = (
  <div className="alert alert-info">
          Search a Hero
        </div>
 )


  return (
    <div className="row mt-2">
      <div className="col-5">
        <h3>Search Page</h3>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input
          className="form-control"
          type="text"
          placeholder="search hero"
          name="searchText" 
          value={searchText}
          onChange={onInputChange}
          autoComplete="off"/>
          <button className="btn btn-primary mt-2">Search</button>
        </form>
      </div>
      <div className="col-7">
        <h3>Results</h3>
        <hr />        
        {
          (q === "") ? inicialInfo :
          (heroesList.length > 0)? (
            heroesList.map((hero)=>{
              return (
                <HeroCard key={hero.id} hero={hero} />               
              )
            })
          ) : noInfo
          
        }
      </div>
    </div>
  )
}
