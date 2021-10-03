import axios from "axios";
import React, { useState }from "react";
import * as styles from './form.module.css';

const Form = ({reloadTodos}) => {

    const [text, setText] = useState('');

    const handlerSubmit = async event => {
        event.preventDefault();

        if (text === '') return;

        await axios.post('/api/create-todo', { text });

        setText('');
        reloadTodos()
    };

    return (
        <form className={styles.form} onSubmit={handlerSubmit} >
            <label className={styles.label} > Add a Todo
                <input type="text" className={styles.input} value={text} onChange={event => setText(event.target.value)}/>
            </label>
            <button className={styles.button} >Save Todo</button>
        </form>
    )
}

export default Form;