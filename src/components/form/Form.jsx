import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const Form = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredMail, setEnteredMail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = {
            name: enteredName,
            email: enteredMail,
            message: enteredMessage
        };

        try {
            const response = await axios.post('http://localhost:5000/submit', formData);
            console.log('Form submitted successfully', response.data);
        } catch (error) {
            console.error('There was an error submitting the form', error);
        }
    };

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className="form__input">
                <input
                    type="text"
                    placeholder='Your name'
                    value={enteredName}
                    onChange={e => setEnteredName(e.target.value)}
                />
            </div>

            <div className="form__input">
                <input
                    type="email"
                    placeholder='Your Email'
                    value={enteredMail}
                    onChange={e => setEnteredMail(e.target.value)}
                />
            </div>

            <div className="form__input">
                <textarea
                    placeholder='Write Message'
                    value={enteredMessage}
                    onChange={e => setEnteredMessage(e.target.value)}
                />
            </div>

            <button className="submit__btn" type='submit' onClick={submitHandler}>
                Submit
            </button>
        </form>
    );
};

export default Form;
