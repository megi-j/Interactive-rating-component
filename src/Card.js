import star from './images/icon-star.svg'
import Button from './Button'


export default function Card(props){
    
    return(
        <main className='card'>
           <div className='star-box'>
               <img src={star} alt="star" />
           </div>
           <h1 className='title'>How did we do?</h1>
           <p className='text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
           <div className='button-box'>
                <Button number="1" click = {(e)=>props.handleChange(e,1)} />
                <Button number="2" click = {(e)=>props.handleChange(e,2)} />
                <Button number="3" click = {(e)=>props.handleChange(e,3)} />
                <Button number="4" click = {(e)=>props.handleChange(e,4)} />
                <Button number="5" click = {(e)=>props.handleChange(e,5)} />
           </div>
           <button onClick={props.changeRate} className="submit-button">SUBMIT</button>
          
        </main>
    )
}