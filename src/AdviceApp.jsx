import { useEffect, useState } from "react";


export const AdviceApp = () => {

const [id, setId] = useState();
const [advice, setAdvice] = useState('');


const getAdvice = async() => {
  const url = `https://api.adviceslip.com/advice`;
  const resp =  await fetch(url);
  const data = await resp.json();
  setId(data.slip.id);
  setAdvice(data.slip.advice)
}

useEffect(() => {
  getAdvice();
}, [])

console.log(id);
console.log(advice)
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
          <button onClick={getAdvice} className=' position-absolute top-100 start-50 translate-middle btn-color rounded-5'>
              <img src="src\images\icon-dice.svg" alt="boton_advice" />
          </button>
          
          
        </div>
      </div>
      </div>
      
    </div>

  
  
  
</>
  )
}
