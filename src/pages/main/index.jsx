import styles from './styles.module.scss';
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { auth, getNome } from '../../controller/userController';
import { useRouter } from 'next/router';
import Header from '../../components/headerComponent';

export default function Main() {
    const { setIsLogged, isLogged } = useContext(UserContext);

    const router = useRouter();

    auth(router, setIsLogged);
        
    {
        if (isLogged) {
            return (
                <div className={styles.body}>
                    <Header/>
                </div>
            );
        } else {

            return <div></div>
        }
    }
}


