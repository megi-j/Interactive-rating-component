import Card from "./Card";
import "./reset.css"
import './App.css'
import ThankYou from "./ThankYou";
import { useState } from 'react'

function App() {
  const [rateIsClicked, setRateIsClicked] = useState(false)
  const [submitIsClicked, setSubmitIsClicked] = useState(false)
  const [rate, setRate] = useState(null)

  function handleChange(e, id){
    setRate(id)
    setRateIsClicked(true)
    let buttons = document.querySelectorAll(".btn");
     buttons.forEach(btn=>{
        btn.removeAttribute("id")
    })
    e.target.id = "active"   
  }
  function changeRate(){
    rateIsClicked && setSubmitIsClicked(true);
  }
  return (
     <div className="container">
         {submitIsClicked ? <ThankYou rate={rate} /> : <Card handleChange={handleChange} changeRate={changeRate} />}
     </div>
  );
}

export default App;
