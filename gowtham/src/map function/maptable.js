export default function Maptable()
{
   const a=[
      {name:'Gowtham',age:25,dob:'10/11/1998',skills:[{frontend:'HTML/CSS',backend:'NODEJS',database:'MONGODB'}]},
      {name:'Gokul',age:24,dob:'04/05/1999',skills:[{frontend:'BOOTSTRAP/REACTJS',backend:'NEXTJS',database:'SQL'}]}
   ]

   return(
      <>
         <table className="table table-bordered border bg-info">
            <tr>
               <th>Name</th>
               <th>Age</th>
               <th>DOB</th>
               <th>Skills</th>
            </tr>
            {a.map((sam)=>
            <tr>
               <td>{sam.name}</td>
               <td>{sam.age}</td>
               <td>{sam.dob}</td>
               <td>{sam.skills.map((e)=>
               <tr>
                  {/* <th>Front-End / Back-End / DataBase</th> */}
                  <td>{e.frontend} / {e.backend} / {e.database}</td>
               </tr>)}</td>
            </tr>)}
         </table> 
      </>
   )
}
