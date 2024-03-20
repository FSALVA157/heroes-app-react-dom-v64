import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo, useState } from "react";





export const HeroPage = () => {   
    const navigate = useNavigate();
    const {id} = useParams();

    const [verdad, setVerdad] = useState(true)

    const onNavigateBack = () => {
      navigate(-1);
    }

    const hero = useMemo(() => getHeroById({id}), [id])

    if(!hero){
        return (<Navigate to="/marvel"/>);
    }
  

  return (
    <div className="row mt-5">
        <div className="col-4">
          <img src={`/heroes/${id}.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" ></img>
        </div>

        <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>
            <button 
               onClick={onNavigateBack}
               className="btn btn-outline-primary"
              >Back</button>
              
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" value={verdad} onChange={() => setVerdad(!verdad)}/>
               <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
              </div>



        </div>
    </div>
  )
}






