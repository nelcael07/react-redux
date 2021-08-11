import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {subract, sum} from '../store/Calculator/Calculator.actions'

const Calculator = () => {
  // hook para pegar os dados do store
  const result = useSelector(state => state.calculator)
  const dispath = useDispatch()


  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  return (
    <div>
      <input type={valor1} placeholder='a' onChange={(e)=> setValor1(e.target.value)}/>
      <input type={valor2} placeholder='b' onChange={(e)=> setValor2(e.target.value)}/>

      <button
        onClick={()=> dispath(sum(parseInt(valor1),parseInt(valor2)))}
      >somar</button>
      <button
        onClick={() => dispath(subract(parseInt(valor1), parseInt(valor2)))}
      >subtrair</button>

      <div>{result}</div>
    </div>
  );
}


export default Calculator;
