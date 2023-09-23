import api from "../api";
import { useState, createContext, useEffect } from 'react';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({data}) => {
            setUser(data.user)
            setLogin(true)
        }).catch(() => {
            console.log('[ERROR] Usuário não autenticado')
        })
    }

    useEffect(() => {
        getUser(token);
    }, [token]);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email:string, password:string) => {
        api.post('/user/sign-in', {email, password}).then(({data}) => {
            setLogin(true);
            // puxar os dados
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
        }).catch((error) => {
            console.log('[ERROR] Não foi possivel fazer o login')
        })
    }

    return(
        <UserContext.Provider value={{
            login,
            user,
            handleLogin, 
            logOut
        }}>
            {children}
        </UserContext.Provider>
    )
}