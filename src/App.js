

import { useState } from 'react';
import './App.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Phone></Phone>
      <District name='kopila' age='teen' profession='actresss'></District>
      <District name='Urvashi' age='teen' profession='actresss'></District>
      <District name='katrina' age='teen' profession='actresss'></District>
     
    </div>
  );
}


function Phone(){
  const [Phones, setPhones] = useState(100)

  const Charger=()=>{
    const PhoneCharge = Phones + 10;
    setPhones(PhoneCharge)
  }

  const Decrease=()=>{
    const PhoneChargeDecrease = Phones - 10
    setPhones(PhoneChargeDecrease)
  }

  return(
    <div style={{margin: '10px'}}>
      <h1>charge: {Phones} </h1>
        <button onClick = {Charger}>Charge Percent Increase</button>
        <button onClick = {Decrease}>Charger Percent Decrease</button>
    </div>
  )
}


function District(props){
  return(
    <div className='district'>
      <h2>keMon aco oo bokuli?</h2>
      <h3>name: {props.name}  </h3>
      <p>age :{props.age}</p>
      <p>profession : {props.profession}</p>
    </div>
  )
}

export default App;
