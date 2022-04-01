import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import { useRouter } from 'next/router';
import styles from '../pages/main/styles.module.scss';
import cookie from 'js-cookie';


export default function Header() {
    const router = useRouter();

    const [currentUser, setCurrentUser] = useState({})

   
    useEffect(()=>{
        if (window.localStorage.getItem("currentUser")) {
            
            setCurrentUser(JSON.parse(window.localStorage.getItem("currentUser")));
        }
        

    },[router.pathname])


    return (
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <h1>Olá, {currentUser.nome}</h1>
                <div className={styles.botoes}>
                    <button onClick={(e) => {
                        e.preventDefault();
                        router.push({
                            pathname: '/main'
                        })
                    }} >Home</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        router.push({
                            pathname: '/edit'
                        })
                    }}>Editar dados</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        cookie.remove("session_token")
                        window.localStorage.removeItem("currentUser")
                        router.push({
                            pathname: '/'
                        })
                    }} >Loggout</button>
                </div>

            </div>
        </header>
    );
}