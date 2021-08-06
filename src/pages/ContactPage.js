import { React, useState } from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.scss';

const ContactPage = () => {
    const text = "Formularz nie został jeszcze wysłany! Nie chcesz wysłać wiadomości do Rysia? Pozostań na stronie i kliknij WYŚLIJ";
    const [value, setValue] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        setValue('');
    }

    const changeHandler = e => {
        setValue(e.target.value);
    }

    return (
        <div className="contact">
            <form onSubmit={submitHandler} >
                <h3 className="contact-header">Napisz do jamnika</h3>
                <textarea
                    value={value}
                    onChange={changeHandler}
                    placeholder="wpisz wiadomość do Ryszarda...">
                </textarea>
                <button className="contact-btn">wyślij</button>
            </form>
            <Prompt
                when={value}
                message={text}
            />
        </div>
    );
}

export default ContactPage;