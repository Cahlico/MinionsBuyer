import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import { Container, FormContainer } from '../styles/styledLogin';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [clicked, setClicked] = useState(false);
    const history = useHistory();

    function sendRequest(event) {
        event.preventDefault();

        if(email === '' || password === '') {
            alert('Fill in all the filds');
            return;
        } else if(password !== passwordConfirmation) {
            alert('Passwords dont match');
            return;
        }

        setClicked(true);
        
        const requestFormat = { email, username, password, passwordConfirmation };
        const request = axios.post('https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/users', requestFormat);

        request.then(()=> {
            history.push('/');
        });

        request.catch(() => {
            alert('current email already attached to an account');
            setClicked(false);
        });
    }

    return (
        <Container>
            {clicked
                ? <img src='https://cdn.dribbble.com/users/104417/screenshots/2133269/loadinggram_14_minions_motvion.gif' />
                : <FormContainer onSubmit={sendRequest} >
                    <h1>Let's create an account</h1>
                    <input 
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder='e-mail'
                    />
                    <input
                        type='text'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        placeholder='username'
                    />
                    <input
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder='password'
                    />
                    <input
                        type='password'
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        value={passwordConfirmation}
                        placeholder='confirm your password'
                    />
                    <button type='submit' >Sign Up</button>
                    <Link to='/'>go back to login page</Link>
                </FormContainer>
            }
        </Container>
    );
}