import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "./ui/components/Navbar";
import { useContext, useEffect } from "react";
import { AuthContext } from "./auth/context/AuthContext";




function HeroesApp() {
  const {authState} = useContext(AuthContext);
  const {logged} = authState
  const navigate = useNavigate();
  const location = useLocation();
  
  const lastPath = location.pathname + location.search;

  localStorage.setItem('lastPath', lastPath);
  

  useEffect(() => {
    if(!logged){
      navigate('/login', {
        replace: true
      });
    }
  }, [authState])
  

  return (
    <>    
    {
      !logged? <div className="alert alert-danger">Cargando ... </div>
      : (
        <>
        <Navbar/>
        <Outlet/>      
        </>
      )
    }        
    </>
  )
}

export default HeroesApp;
