import { useEffect } from "react";



export const Spinner = () => {
  
    useEffect(() => {
        setTimeout(() => {
            
        }, 3000);
      
    }, [])
    
  

  return (<>        
                <img src='/assets/icons/spinner_1.svg'></img>        
      </>);
};
