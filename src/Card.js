import star from './images/icon-star.svg'
import Button from './Button'
import styles from './Card.module.css'

let title = "How did we do?";
let text = "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"

export default function Card(props){
    let rateNumbers = [1, 2, 3, 4, 5]
    return(
        <main className={styles.card}>
           <div className={styles.starBox}>
               <img src={star} alt="star" />
           </div>
           <h1 className={styles.title}>{title}</h1>
           <p className={styles.text}>{text}</p>
           <div className={styles.buttonBox}>
            {rateNumbers.map((num)=>{
                return <Button number = {num} click = {()=>props.handleChange(num)} id={props.rate == num ? `${styles.active}` : ""} />
            })}
           </div>
           <button onClick={props.changeRate} className={styles.submitButton}>SUBMIT</button>
          
        </main>
    )
}