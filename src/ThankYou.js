import phone from "./images/illustration-thank-you.svg"

export default function ThankYou(props){
    return (
          <main className="card-2">
            <img src={phone} className="phone-img" alt="phone" />
            <div className="result-box">
                <p>You selected {props.rate} out of 5</p>
            </div>
            <h1 className="title">Thank you!</h1>
            <p className="text">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </main>
    )
}