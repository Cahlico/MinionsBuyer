import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { DebounceInput } from 'react-debounce-input';

import SessionContext from '../contexts/SessionContext';
import { Container, FormContainer } from '../styles/styledLogin';

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const { session, setSession } = useContext(SessionContext);
    const [users, setUsers] = useState(null);
    const history = useHistory();

    useEffect(() => {
        if(email.length <= 3 && password.length <= 3) return;

        const request = axios.get('https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/users');
        request.then(response => {
            setUsers(response.data);
        });
    }, [email, password]);

    function sendRequest(event) {
        event.preventDefault();

        if(email === '' || password === '') {
            alert('Fill in all the filds');
            return;
        }

        const user = users.find(e => {
            return e.email === email;
        });

        if(!user) return alert('current user is not registered');

        setClicked(true);

        const requestFormat = { email, password, userId: user.userId };
        const request = axios.post('https://7247bwzla1.execute-api.sa-east-1.amazonaws.com/prod/sign-in', requestFormat);
        request.then(response => {
            const { userId, email, token } = response.data;
            setSession({...session, userId, email, token});
            history.push('/shop-page');
            const jsonData = JSON.stringify({ userId, email, token });
            localStorage.data = jsonData;
        });
        request.catch(response => {
            alert('incorrect email or password');
            setClicked(false);
        });
    }

    return (
        <Container>
            {clicked
                ? <img src='https://cdn.dribbble.com/users/104417/screenshots/2133269/loadinggram_14_minions_motvion.gif' />
                : <FormContainer onSubmit={sendRequest} >
                    <h1>Sign in if you have an account</h1>
                    <DebounceInput
                        type='email'
                        minLength={3}
                        debounceTimeout={300}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        placeholder='e-mail'
                    />
                    <DebounceInput
                        type='password'
                        minLength={3}
                        debounceTimeout={300}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        placeholder='password'
                    />
                    <button type='submit' >Log in</button>
                    <Link to='/sign-up'>create account</Link>
                </FormContainer>
            }
        </Container>
    );
}