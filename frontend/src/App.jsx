import React,{ useEffect,useState} from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';



function App() {
 const [pumpData,setPumpData]=useState([]);

 useEffect(()=>{
  axios.get('https://localhost:3000/pumps')
.then(res=> setPumpData(res.data))
 .catch(err=> console.log(err));
 },[]);

const time = pumpData.map(item=>item.timestamp);
const status = pumpData.map(item=> item.pump_status);



  return (
    <>
     <h2> Pump ON/OFF Graph </h2>
     <Plot
     data={[{
      x:time,
      y:status,
      type:'scatter',
      mode:'lines+markers',
      marker:{color:'blue'},
     }]}
     layout ={{title:'Pump Status Over Time', width:800, height:400}}/>
    </>
  );
}

export default App;
