import styles from './styles.module.scss';
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { auth, updateUser, deleteUser } from '../../controller/userController';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../components/headerComponent';
import swal from 'sweetalert';

export default function Main() {
    const {setIsLogged, isLogged} = useContext(UserContext);
    const router = useRouter();
    const [user, setUser] = useState({});
    const [endereco, setEndereco] = useState({});
    const [alterPassword, setAlterPassword] = useState(false);
    const [password, setPassword] = useState("");

    auth(router, setIsLogged);
   
    useEffect(()=>{
        if (window.localStorage.getItem("currentUser")) {
            
            setUser(JSON.parse(window.localStorage.getItem("currentUser")));
            setEndereco(JSON.parse(window.localStorage.getItem("currentUser")).endereco);
            
        }
        
        document.getElementById("buttonAlter").style.display = 'none';

    },[router.pathname])

   async function isDelete(){
        await swal({
            title:"Atenção",
            text: "Deseja realmente apagar essa conta?",
            icon: "warning",
            buttons: [
                'Não, cancele isso!',
                'Sim, eu quero!'
              ],
              dangerMode: true,
        }).then((isConfirm)=>{
            if (isConfirm) {
                deleteUser(router);
            }
        })
    }

    function alter(){
        const input = document.getElementById("buttonAlter");
        if (alterPassword) {
            input.style.display = 'none';
            setAlterPassword(false);
        }else{
            input.style.display = '';
            setAlterPassword(true);
        }
    }

    {
        if (isLogged) {
            return (
                <div className={styles.body}>
                    <Header />
                    <section className={styles.sectionLogin}>
                        <div className={styles.containerLogin}>
                            <div className={styles.headerLogin}>
                                <h2>Editar dados</h2>
                            </div>
                            <form id="formLogin" className={styles.form}>
                                <div className={styles.formContainer}>
        
                                    <div>
                                        <label>Nome completo</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            placeholder=" Digite seu nome"
                                            required=""
                                            value={user.nome}
                                            onChange={(value) => {
                                                setUser(prevState => {
                                                    return { ...prevState, nome: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder=" Digite seu email"
                                            required=""
                                            value={user.email}
                                            onChange={(value) => {
                                                setUser(prevState => {
                                                    return { ...prevState, email: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>CPF</label>
                                        <input
                                            type="number"
                                            id="cpf"
                                            name="cpf"
                                            placeholder=" Digite seu CPF"
                                            required=""
                                            value={user.cpf}
                                            onChange={(value) => {
                                                setUser(prevState => {
                                                    return { ...prevState, cpf: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>PIS</label>
                                        <input
                                            type="number"
                                            id="pis"
                                            name="pis"
                                            placeholder=" Digite seu PIS"
                                            required=""
                                            value={user.pis}
                                            onChange={(value) => {
                                                setEndereco(prevState => {
                                                    return { ...prevState, pis: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    
                                    <div>
                                        <label>Pais</label>
                                        <input
                                            type="text"
                                            id="pais"
                                            name="pais"
                                            placeholder=" Digite seu pais"
                                            required=""
                                            value={endereco.pais}

                                            onChange={(value) => {
                                                setEndereco(prevState => {
                                                    return { ...prevState, pais: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Estado</label>
                                        <input
                                            type="text"
                                            id="estado"
                                            name="estado"
                                            placeholder=" Digite seu estado"
                                            required=""
                                            value={endereco.estado}
                                            
                                            onChange={(value) => {
                                                setEndereco(prevState => {
                                                    return { ...prevState, estado: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Município</label>
                                        <input
                                            type="text"
                                            id="municipio"
                                            name="municipio"
                                            placeholder=" Digite seu município"
                                            required=""
                                            value={endereco.municipio}

                                            onChange={(value) => {
                                                setEndereco(prevState => {
                                                    return { ...prevState, municipio: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>CEP</label>
                                        <input
                                            type="number"
                                            id="cep"
                                            name="cep"
                                            placeholder=" Digite seu CEP"
                                            required=""
                                            value={endereco.cep}

                                            onChange={(value) => {
                                                setEndereco(prevState => {
                                                    return { ...prevState, cep: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Rua</label>
                                        <input
                                            type="text"
                                            id="rua"
                                            name="rua"
                                            placeholder=" Digite sua rua"
                                            required=""
                                            value={endereco.rua}
                                            
                                            onChange={(value) => {
                                                setEndereco(prevState => {
                                                    return { ...prevState, rua: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Número</label>
                                        <input
                                            type="number"
                                            id="numero"
                                            name="numero"
                                            placeholder=" Digite seu numero"
                                            required=""
                                            value={endereco.numero}

                                            onChange={(value) => {
                                                setEndereco(prevState => {
                                                    return { ...prevState, numero: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label>Complemento</label>
                                        <input
                                            type="text"
                                            id="complemento"
                                            name="complemento"
                                            placeholder=" Digite seu complemento"
                                            required=""
                                            value={endereco.complemento}

                                            onChange={(value) => {
                                                setEndereco(prevState => {
                                                    return { ...prevState, complemento: value.target.value }
                                                }
                                                )
        
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <button onClick={(e)=> {
                                            e.preventDefault();
                                            alter();
                                            }} className={styles.alterPassword}>
                                            Alterar senha
                                        </button>
                                        <div id='buttonAlter' className={styles.buttonAlter}>
                                        <label>Senha</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Digite a nova senha"
                                            required=""
                                            onChange={(value) => {
                                                setPassword(value.target.value);        
                                            }}
        
                                        />
                                    </div>
                                    </div>
                                    <div className={styles.buttonsForm} >
                                        <button
                                            className={styles.button}
                                            type="submit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                updateUser(router, user, endereco, password);
                                                
                                            }}
                                        >Salvar</button>
                                        <button
                                            className={styles.buttonDelete}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                isDelete();
                                                
                                            }}
                                        >Apagar conta</button>
                                    </div>
                                    
                                </div>
                            </form>
        
                        </div>
                    </section>
                </div>
            );
        } else {
            if (localStorage.getItem("currentUser")) {
                localStorage.removeItem("currentUser");
             }
            return <div></div>
        }
    }
}


