import styles from './App.module.css'

export default function Button(props){
    return <button className={styles.btn} id={props.id} onClick={props.click}>{props.number}</button>
}
