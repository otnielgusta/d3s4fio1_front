import { useState, useContext, useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import { UserContext, UserContextProvider } from '../contexts/userContext';
import { useRouter } from 'next/router';
import { login } from '../controller/userController';
import Link from 'next/link';
import swal from 'sweetalert';

export default function Home() {

  const router = useRouter();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [option, setOption] = useState('E-Mail');

  async function setEnable() {
    if (usuario == "" || senha == "") {
      await swal({
        title: "Preencha todos os campos!",
        text: " ",
        icon: "warning",
        buttons: {
          visible: false
        },
        timer: 1500

      })
      if (usuario == "") {
        document.getElementById("login").style.border = "solid 2px red";
      } else {
        document.getElementById("login").style.border = "none";

      }
      if (senha == "") {
        document.getElementById("password").style.border = "solid 2px red";
      } else {
        document.getElementById("password").style.border = "none";

      }
    } else {
      login(router, usuario, senha, option);

    }
  }


  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.containerHeader}>
          <h1>Olá, visitante</h1>

        </div>

      </header>
      <section className={styles.sectionLogin}>
        <div className={styles.containerLogin}>
          <div className={styles.headerLogin}>
            <h2>Desafio PontoTel</h2>
            <h2>Login</h2>
          </div>
          <form id="formLogin" className={styles.form}>
            <div className={styles.formContainer}>

              <div className={styles.usuario}>
                <label>PIS, CPF ou e-mail</label>
                <select onChange={(value) => setOption(value.target.value)} >
                  <option>E-Mail</option>
                  <option>CPF</option>
                  <option>PIS</option>
                </select>
                <input
                  type="text"
                  id="login"
                  name="login"
                  placeholder=" Digite seu login"
                  required=""
                  onChange={(value) => {
                    setUsuario(value.target.value);

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
                    setSenha(value.target.value);
                  }}

                />
              </div>
              <div>
                <button
                  className={styles.button}
                  id="buttonSubmit"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setEnable()

                  }}
                >Logar</button>
              </div>
              <p>Novo por aqui?
                <Link href={'/register'}>
                  {" cadastre-se"}
                </Link>
              </p>
            </div>
          </form>

        </div>
      </section>
    </div>
  )
}
