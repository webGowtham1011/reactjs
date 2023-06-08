import axios from "axios"
import { useEffect, useState } from "react"
import { API } from "./Api/API"

export default function View() {
   const [view,setView] = useState([])
   useEffect(() => {
      axios.get('https://6464679a043c103502b8cddc.mockapi.io/react').then((a)=>
      {
         setView(a.data);
      })
   })

   const dele = (b) => {
      axios.delete(`${API}/${b}`).then(()=>{
         axios.get('https://6464679a043c103502b8cddc.mockapi.io/react').then((c)=>
      {
         setView(c.data);
      })
      })
   }

   return(
      <>
       <table>
         <tr>
            <th>Id</th>
            <th>Name</th>
         </tr>
         {view.map((e)=>
            <tr>
               <td>{e.id}</td>
               <td>{e.Personname}</td>
               <td><button onClick={()=>dele(e.id)}>Del</button></td>
            </tr>
         )}
       </table>
      </>
   )
}
