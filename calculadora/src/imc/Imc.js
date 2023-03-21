import React,{ useState } from 'react'

const Imc = () => {
    const[peso,setPeso] = useState();
    const[altura,setAltura] = useState();
    const[resultado,setResultado] = useState();

    console.log(peso,altura)
    
    const  calcularImc = () =>{
        const imc = peso/ (altura*altura)
        const formattedImc = imc.toFixed(2)

        setResultado(+formattedImc)
    }
  return (
    <div>
        <h1>Calculadora IMC</h1>

        <div>
            <div>
                <input type="number" value={peso} placeholder='Digite seu peso (kg)'
                onChange={(e)=> setPeso(e.target.value)} />    
            </div>
            <div>
                <input type="number" value={altura} placeholder='Digtite sua altura (m)' 
                onChange={(e)=> setAltura(e.target.value)}/>
            </div>
           
            <button onClick={calcularImc}>calcular</button>
             <h2>{resultado}</h2>
        </div>
    </div>
  )
}

export default Imc