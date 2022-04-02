import styles from './styles.module.scss';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { register, getAlreadyUser } from '../../controller/userController'
import { UserContext } from '../../contexts/userContext';

export default function Main() {
    const {statusCode, setStatusCode} = useContext(UserContext)
    const router = useRouter();
    const [user, setUser] = useState({
        nome: "",
        email: "",
        cpf: "",
        pis: "",
        senha: "",
        pais: "",
        estado: "",
        municipio: "",
        cep: "",
        rua: "",
        numero: "",
        complemento: "",
    })

    async function setEnable() {
        if (user.nome == "" || user.email == "" || user.cpf == "" || user.pis == "" || user.pais == "" || user.estado == "" || user.municipio == "" || user.cep == "" || user.rua == "" || user.numero == "" || user.senha == "") {
            await swal({
                title: "Preencha todos os campos!",
                text: " ",
                icon: "warning",
                buttons: {
                    visible: false
                },
                timer: 1500

            })
            if (user.nome == "") {
                document.getElementById("nome").style.border = "solid 2px red";
            } else {
                document.getElementById("nome").style.border = "none";

            }
            if (user.email == "") {
                document.getElementById("email").style.border = "solid 2px red";
            } else {
                document.getElementById("email").style.border = "none";

            }
            if (user.cpf == "") {
                document.getElementById("cpf").style.border = "solid 2px red";
            } else {
                document.getElementById("cpf").style.border = "none";

            }
            if (user.pis == "") {
                document.getElementById("pis").style.border = "solid 2px red";
            } else {
                document.getElementById("pis").style.border = "none";

            }
            if (user.pais == "") {
                document.getElementById("pais").style.border = "solid 2px red";
            } else {
                document.getElementById("pais").style.border = "none";

            }
            if (user.estado == "") {
                document.getElementById("estado").style.border = "solid 2px red";
            } else {
                document.getElementById("estado").style.border = "none";

            }
            if (user.municipio == "") {
                document.getElementById("municipio").style.border = "solid 2px red";
            } else {
                document.getElementById("municipio").style.border = "none";

            }
            if (user.cep == "") {
                document.getElementById("cep").style.border = "solid 2px red";
            } else {
                document.getElementById("cep").style.border = "none";

            }
            if (user.rua == "") {
                document.getElementById("rua").style.border = "solid 2px red";
            } else {
                document.getElementById("rua").style.border = "none";

            }
            if (user.numero == "") {
                document.getElementById("numero").style.border = "solid 2px red";
            } else {
                document.getElementById("numero").style.border = "none";

            }
            if (user.senha == "") {
                document.getElementById("password").style.border = "solid 2px red";
            } else {
                document.getElementById("password").style.border = "none";

            }

        } else {
            await getAlreadyUser(statusCode, setStatusCode, user.email, user.cpf, user.pis);
            
            if (statusCode == 404) {
                console.log("entrou")
                register(router, user);

            }
        }
    }


    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <div className={styles.containerHeader}>
                    <h1>Desafio PontoTel</h1>
                </div>

            </header>
            <section className={styles.sectionLogin}>
                <div className={styles.containerLogin}>
                    <div className={styles.headerLogin}>
                        <h2>Cadastro</h2>
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
                                    onChange={(value) => {
                                        setUser(prevState => {
                                            return { ...prevState, pis: value.target.value }
                                        }
                                        )

                                    }}
                                />
                            </div>
                            <div>
                                <label >Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Digite sua senha"
                                    required=""
                                    onChange={(value) => {
                                        setUser(prevState => {
                                            return { ...prevState, senha: value.target.value }
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
                                    onChange={(value) => {
                                        setUser(prevState => {
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
                                    onChange={(value) => {
                                        setUser(prevState => {
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
                                    onChange={(value) => {
                                        setUser(prevState => {
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
                                    onChange={(value) => {
                                        setUser(prevState => {
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
                                    onChange={(value) => {
                                        setUser(prevState => {
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
                                    onChange={(value) => {
                                        setUser(prevState => {
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
                                    onChange={(value) => {
                                        setUser(prevState => {
                                            return { ...prevState, complemento: value.target.value }
                                        }
                                        )

                                    }}
                                />
                            </div>
                            <div></div>
                            <div>
                                <button
                                    className={styles.button}
                                    type="submit"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setEnable();
                                    }}
                                >Cadastrar</button>
                            </div>
                            <p>
                                <Link className={styles.linkVoltar} href={'/'}>
                                    Voltar para login
                                </Link>
                            </p>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    );

}


