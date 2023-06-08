export default function Pro(props){
   const {a}=props;
   return(
      <div>
         <h6>Name : {a.Name}</h6>
         <p>AadhaarNo : {a.Proof.AadhaarNo}</p>
         <h5>DOB : {a.DOB}</h5>
      </div>
   )
}
