import phone from "./images/illustration-thank-you.svg"
import styles from './App.module.css'

export default function ThankYou(props){
    return (
          <main className={styles.card2}>
            <img src={phone} className={styles.phoneImg} alt="phone" />
            <div className={styles.resultBox}>
                <p>You selected {props.rate} out of 5</p>
            </div>
            <h1 className={styles.title}>Thank you!</h1>
            <p className={styles.text}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </main>
    )
}