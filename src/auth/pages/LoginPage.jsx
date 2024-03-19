import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {
  const {authState, login} = useContext(AuthContext);
  const navigate = useNavigate();
  const [valueInput, setValueInput] = useState("")

  useEffect(() => {
    if(authState.logged){
      navigate('/marvel', {
        replace: true
      });
    }
  }, [authState])



  const onInputChange = (e) => {
    e.preventDefault();
    setValueInput(e.target.value)
  }

  const onLogin = (event) => {
    event.preventDefault();
    if (valueInput.trim().length <= 1) return;
    login(valueInput);

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, {
        replace: true
    });
  }

  return (
    <>
        <h1>Login</h1>
        <hr />
        <form
           onSubmit={(e)=>onLogin(e)}
           >
          <input
             type="text"
             className="form-control"
             placeholder="nombre de usuario"
             name="inputUser"
             onChange={(e)=>onInputChange(e)}
              />
        </form>
        <button onClick={onLogin} className="btn btn-primary mt-3">
          Login
         </button>
    </>
  )
}
