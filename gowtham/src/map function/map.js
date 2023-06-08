import { useState } from "react"

export default function Map()
{
   // const [name,setname]=useState(['siva','gowtham'])

   const [count,setCount] = useState([0]);

   const cnt = () => {
      setCount(count+1);
   } 

   return(
      // <>
      // <h1>Map function</h1>

      // {name.map((arr)=>
      // <ul>
      //    <li>{arr}</li>
      // </ul>)}
      // </>
   
   <>
   {count.map((e)=>
   <ul>
      <li>You Have Clicked {e} Times  <button onClick={()=>setCount(count+1)}>add</button></li>
      {/* <li><button onClick={cnt}>Add</button></li> */}
   </ul>
   )}
   </>
   
   
   )
}
