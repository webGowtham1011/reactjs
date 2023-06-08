export default function Time() {
   let currentdate = new Date().toDateString();
   let currenttime = new Date().toTimeString();
   return(
      <>
      <h5>CurrentDate : {currentdate}</h5>
      <h5>CurrentTime : {currenttime}</h5>
      </>
   );
}
