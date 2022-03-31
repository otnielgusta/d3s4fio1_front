import styles from './styles.module.scss';
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { auth } from '../../controller/userController';
import { useRouter } from 'next/router';

export default function Main() {
    const { currentUser, setIsLogged, isLogged } = useContext(UserContext);
    const router = useRouter();

    auth(router, setIsLogged);
    {
        if (isLogged) {
            return (
                <div className={styles.body}>
                    <header className={styles.header}>
                        <div className={styles.containerHeader}>
                            <h1>Bem vindo, {currentUser.nome}</h1>

                        </div>
                    </header>
                </div>
            );
        } else {

            return <div></div>
        }
    }
}


