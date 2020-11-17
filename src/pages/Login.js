import React, {useState} from 'react';

import { LoginContainer, FormContainer } from '../styles/styledLogin';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);

    function sendRequest(event) {
        event.preventDefault();

        if(email === '' || password === '') {
            alert('Por favor, preencha todos os campos');
            return;
        }

        setClicked(true);
    }

    return (
        <LoginContainer>
            {clicked
                ? <img src='https://cdn.dribbble.com/users/104417/screenshots/2133269/loadinggram_14_minions_motvion.gif' />
                : <FormContainer onSubmit={sendRequest} >
                    <h1>Sign in if you have an account</h1>
                    <input 
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder='e-mail'
                    />
                    <input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder='password'
                    />
                    <button type='submit' >Log in</button>
                    <a>create account</a>
                </FormContainer>
            }
        </LoginContainer>
    );
}