import { useState } from "react"

export default function Use() {
//    const [num,setNum] = useState(0);
//    const ad=()=>{
//       setNum(num+1)
//    }
//    const mi=()=>{
//       setNum(num-1)
//    }
//    const set=()=>{
//       setNum(0)
//    }

   // const [count , setcount] = useState(0);
   // const App = () => {
   //    setcount(count+1);
   // }
   // const set = () => {
   //    setcount(0);
   // }

   // const [color,setColor] = useState('red');

   // useEffect(() => {document.body.style.backgroundColor = color},[color])
  
   // function redColor() {
   //    document.getElementById('body').style.backgroundColor = "red";
   // }

   // function yellowColor() {
   //    document.getElementById('body').style.backgroundColor = "yellow";
   // }

   // function blueColor() {
   //    document.getElementById('body').style.backgroundColor = "blue";
   // }

   // function greyColor() {
   //    document.getElementById('body').style.backgroundColor = "grey";
   // }

   const [image,setImage] = useState('');

   return(
      // <>
      // <h2>{num}</h2>
      // <button onClick={ad}>Add</button>
      // <button onClick={mi}>Minus</button>
      // <button onClick={set}>Reset</button>
      // </>

      // <>
      // <button onClick={App}>You Have Clicked {count} Times</button><br/>
      // <button onClick={set}>Reset</button>
      // </>

         // <>
         // <body style={{backgroundColor:color}}>Welcome</body>
         // <button onClick={() => setColor('rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')')}>Click Me</button>
         // </>
         
         // <div class="container-fluid">
         //    <div class="d-flex justify-content-between">
         //             <button id="red" onClick={redColor} class="btn btn-danger">Red</button>
         //             <button id="yellow" onClick={yellowColor} class="btn btn-warning">Yellow</button>
         //             <button id="blue" onClick={blueColor} class="btn btn-primary">Blue</button>
         //             <button id="pink" onClick={greyColor} class="btn btn-secondary">Grey</button>
         //    </div>
         // </div>

         <>
         <h1>{image}</h1>
         <button onClick={() => setImage(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0Y5b5i1rBhLBiuMXsj-TSPt-6hGAUjYc1w&usqp=CAU"></img>)}>Surya</button>
         <button onClick={() => setImage(<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKnIwJdQphf1qD2JZtMS2cO9UUCdzBNr8nw&usqp=CAU"></img>)}>Ajith</button>
         </>



   );
}
