import axios from "axios";
import { useState } from "react";

export default function Sent()
{
   const [name,setname]=useState('')
   const submit=(event)=>{
      event.preventDefault();
      // console.log('hai');
   }
   const h=()=>{
      axios.post('https://6464679a043c103502b8cddc.mockapi.io/react',{Personname:name})
      setname('')
   }
   return(
      <>
      <h1>Form</h1>
      <form onSubmit={submit}>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
      <button onClick={h}> POST</button>

      </form>
      
      </>
   )
}
