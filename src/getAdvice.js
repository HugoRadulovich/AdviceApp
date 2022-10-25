import { useState } from "react";




export const getAdvice = () => {
    const [advice, setAdvice] = useState('');
    const [id, setId] = useState('');
    
    async function getUser() {
        try {
          const response = await axios.get('https://api.adviceslip.com/advice');
          setAdvice(response.data.slip.advice)
          setId(response.data.slip.id)
          // const {advice,id} = response.data.slip;
          console.log(advice)
          console.log(id)
          
          // console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

      
    
}
