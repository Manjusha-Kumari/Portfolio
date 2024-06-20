import React, {useState} from 'react'
import './form.css'

const Form = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredMail, setEnteredMail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()

        console.log('submitted')
    }

    return <form className='form'>
        <div className="form__input">
            <input type="text" placeholder='Your name' value={enteredName} onChange={e => 
                setEnteredName(e.target.value)}/>
        </div>

        <div className="form__input">
            <input type="text" placeholder='Your Email' value={enteredMail} onChange={e => 
                setEnteredMail(e.target.value)} />
        </div>

        <div className="form__input">
            <textarea placeholder='Write Message' value={enteredMessage} onChange={e => 
                setEnteredMessage(e.target.value)}></textarea>
        </div>

        <button className="submit__btn" type='submit'>
            Submit
        </button>
    </form>
}

export default Form