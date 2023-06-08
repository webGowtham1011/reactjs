import axios from "axios";
import { useState } from "react"

export default function Post() {

   const [name,setName] = useState('');

   const submit = (a) => {
      a.preventDefault();
   }

   const c = () => {
      axios.post('https://6466c23dba7110b663a7f3ab.mockapi.io/Gowtham',{Name:name})
      setName('')
   }

   return(
      <>
      <h1>Login Form</h1>
      <form onSubmit={submit}>
         <input type="text" value={name} onChange={(b) => setName(b.target.value)}/><br/><br/>
         <button onClick={c}>POST</button>
      </form>
      </>
   )
}
