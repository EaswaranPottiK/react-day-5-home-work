import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data'

function App() {

  const [count,setCount] = useState(1);
  function updateCount(count){
    if (count<0){
      setCount(0)
      alert('Ayyo ! you know that you wrote negative input 😵')
    }
    else if (count >8){
      setCount(0)
      alert('Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀')
    }
    else {
      setCount(count)
    }
  }


  const [text,setText] = useState([])
  function generate(e){
    e.preventDefault();
    setText(data.slice(0,count))
  }
  return (
    <div style={{backgroundColor:'#FFE6D6', textAlign:'center'}}>
      <h1 style={{color:'#B0360B'}}>TIRED OF BORING LOREM IPSUM?</h1>
      <div style={{display:'flex',gap:'10px',alignItems:'center',justifyContent:'center'}}>
        <p>Paragraphs:</p>
        <input type='number' onChange={(e)=>{updateCount(e.target.value)}} style={{border:'none', width:'4vw',height:'4vh', borderRadius:'4px'}}></input>
        <button style={{color:'white',backgroundColor:'#F5873D', padding:'6px 12px', border:'none',borderRadius:'4px'}} onClick={(e)=>generate(e)}>GENERATE</button>
      </div>
      <div style={{color:'#B3430A', width:'50%', margin:'auto'}}>
        {
          text.map((item,itemNo)=>{
            return <p key={itemNo}>{item}</p>
          })
        }
      </div>
    </div>
  );
}

export default App;
