import Card from "./Card";
import "./reset.css"
import styles from './App.module.css'
import ThankYou from "./ThankYou";
import { useState } from 'react'

function App() {
  const [rateIsClicked, setRateIsClicked] = useState(false)
  const [submitIsClicked, setSubmitIsClicked] = useState(false)
  const [selectedRate, setSelectedRate] = useState(null)

  function handleChange(num){
    setSelectedRate(num)
    setRateIsClicked(true)
  }
  function changeRate(){
    rateIsClicked && setSubmitIsClicked(true);
  }
  return (
     <div className={styles.container}>
         {submitIsClicked ? <ThankYou rate={selectedRate} /> : <Card handleChange={handleChange} changeRate={changeRate} rate = {selectedRate} />}
     </div>
  );
}

export default App;
