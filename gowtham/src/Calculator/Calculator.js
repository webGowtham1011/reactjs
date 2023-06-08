import { useState } from "react";

export default function Calculator() {

   const [result,setResult] = useState('');

   const Click = (e) => {
      setResult(result.concat(e.target.name));
   }
   
   const Delete = () => {
      setResult(result.slice(0,result.length-1));
   }

   const Reset = () => {
      setResult("");
   }

   const Calculate = () => {
      try {
         setResult(eval(result).toString());
      } catch(err) {
         setResult("Error")
      }
   }

   return(
   <>

      <div className="container">
         <form>
            <input type="text" value={result}/>
         </form>

         <div className="keys">
            <button name="7" onClick={Click}>7</button>
            <button name="8" onClick={Click}>8</button>
            <button name="9" onClick={Click}>9</button>
            <button name="+" onClick={Click}>+</button>
            <button name="4" onClick={Click}>4</button>
            <button name="5" onClick={Click}>5</button>
            <button name="6" onClick={Click}>6</button>
            <button name="-" onClick={Click}>-</button>
            <button name="1" onClick={Click}>1</button>
            <button name="2" onClick={Click}>2</button>
            <button name="3" onClick={Click}>3</button>
            <button name="*" onClick={Click}>*</button>
            <button name="." onClick={Click}>.</button>
            <button name="0" onClick={Click}>0</button>
            <button name="/" onClick={Click}>/</button>
            <button id="result" onClick={Calculate}>=</button>
            <button id="delete" onClick={Delete}>Delete</button>
            <button id="reset" onClick={Reset}>Reset</button>
         </div>      

      </div>
      
   </>
);
}

