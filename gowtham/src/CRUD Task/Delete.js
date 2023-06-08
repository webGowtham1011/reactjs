import axios from "axios";
import { useEffect, useState } from "react"
import { API } from "./Api";

export default function Delete() {
   
   const [view,setView] = useState([]);

   useEffect(() => {
      axios.get('https://6466c23dba7110b663a7f3ab.mockapi.io/Gowtham').then((a)=>{
         setView(a.data);
      })
   })

   const del = (b) => {
      axios.delete(`${API}/${b}`).then(()=>{
         axios.get('https://6466c23dba7110b663a7f3ab.mockapi.io/Gowtham').then((c)=>{
         setView(c.data);
      })
      })
   }

   return(
      <>
      <table>
         <tr>
            <th>ID</th>
            <th>Name</th>
         </tr>
         {view.map((e) => 
         <tr>
            <td>{e.id}</td>
            <td>{e.Name}</td>
            <button onClick={()=>del(e.id)}>Del</button>
         </tr>
         )}
      </table>   
      </>
   )
}
