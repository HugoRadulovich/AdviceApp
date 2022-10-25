

import axios from 'axios';
import { useEffect, useState } from 'react';


export const AdviceApp = () => {

    const [advice, setAdvice] = useState('');
    const [id, setId] = useState('');
  
    // console.log(advice);
    
    
    async function getUser() {
        try {
          const response = await axios.get('https://api.adviceslip.com/advice');
          setAdvice(response.data.slip.advice)
          setId(response.data.slip.id)
          // const {advice,id} = response.data.slip;
          console.log(advice)
          return (
            id
          )
          // console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
        getUser();
    }, [setId])
    
      
    return (
        <>
            
              <div className="container">
                <div className="position-absolute top-50 start-50 translate-middle">
                <div className="card card-w rounded-4">
                  <div className="card-body">
                    <h5 className="card-title text-center tex-id-color">Advice #{id}</h5>
                    <p className="card-text fs-2 fw-bold text-center tex-adv-color">{advice}</p>
                    <div className="d-flex justify-content-center aling-item-center">
                    <img src="src\images\pattern-divider-desktop.svg" className='m-4 ' alt="" />
                    </div>
                    <button onClick={getUser} className=' position-absolute top-100 start-50 translate-middle btn-color rounded-5'>
                        <img src="src\images\icon-dice.svg" alt="boton_advice" />
                    </button>
                    
                    
                  </div>
                </div>
                </div>
                
              </div>

            
            
            
        </>
    )
}
