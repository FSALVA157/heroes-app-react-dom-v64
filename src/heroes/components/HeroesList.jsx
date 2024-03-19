import { getHerosByPublisher } from "../helpers/getHerosByPublisher";
import PropTypes from 'prop-types';
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";



export const HeroesList = ({ publisher }) => {    
    const heroes = useMemo(() => getHerosByPublisher(publisher), [publisher]); 
  return (
    <>
        <div className="row">
            {heroes.map(heroe => {
                return (<div className="col col-12 col-md-4" key={heroe.id}>
                  <HeroCard hero={heroe} />
                 </div>)
            })}
        </div>
    </>
  )
}


HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
