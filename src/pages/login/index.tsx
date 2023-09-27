import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

function Login() {

    const {handleLogin} = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    
    return(
        <>
            <div>login</div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" value={password} onChange={(e) => setPassoword(e.target.value)}/>
            <button onClick={() => handleLogin(email, password)}>login</button>
        </>
        
    )
}

export default Login;