import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroCard = ({hero}) => {
const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  return (
    <div className='column'>
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`/heroes/${id}.jpg`} className="card-img animate__animated animate__fadeIn" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters)
                            && <p className="card-text">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>Mas...</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
   
    
  )
}

HeroCard.propTypes = {
  hero: PropTypes.object.isRequired
}
