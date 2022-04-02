import cookie from 'js-cookie';
import swal from 'sweetalert';
import { UserClass } from './userClass';

module.exports = {

  async login(router, usuario, senha, option) {
    var body;
    if (option == "E-Mail") {
      body = {
        email: usuario,
        senha: senha
      };
    } else if (option == "CPF") {
      body = {
        cpf: usuario,
        senha: senha
      };
    } else {
      body = {
        pis: usuario,
        senha: senha
      };
    }


    let config = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch("http://127.0.0.1:5000/auth/login", config)

    if (response.status == 200) {
      const data = await response.json()
      cookie.set("session_token", data.token)
      localStorage.setItem("currentUser", JSON.stringify(data.user));

      router.push({
        pathname: '/main',

      });
    } else if (response.status == 403) {

      await swal({
        title: "Usuário não encontrado!",
        text: "O usuário digitado não foi encontrado na base de dados.",
        icon: "warning",
        dangerMode: true,
      })
    } else if (response.status == 401) {

      await swal({
        title: "Senha incorreta!",
        text: " ",

        icon: "error",
        dangerMode: true,
      })
    }

  },

  async auth(router, setIsLogged) {
    const session_token = cookie.get("session_token");
    let config = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': session_token
      }
    }
    fetch("http://127.0.0.1:5000/auth/auth", config)
      .then(async (response) => {
        if (response.status == 200) {
          setIsLogged(true);
        } else if (response.status == 403) {
          setIsLogged(false);
          await swal({
            title: "Token expirado!",
            text: "O seu token de sessão expirou.",
            icon: "warning",
            dangerMode: true,
          })
          router.push({
            pathname: '/',
          });

        } else if (response.status == 401) {
          setIsLogged(false);


          await swal({
            title: "Acesso não autorizado!",
            text: "Você não possui permissão para acessar esta página.",
            icon: "warning",
            dangerMode: true,
          })
          router.push({
            pathname: '/',
          });

        }
      })

      ;
  },

  async getCurrentUser() {

    let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch("http://127.0.0.1:5000/user", config)

    if (response.status == 200) {
      const data = await response.json()
      //localStorage.setItem("currentUser",JSON.stringify(data.user));   
      //setCurrentUser(data.user);
      console.log(data.user)
      return data.user;

    } else if (response.status == 403) {

      await swal({
        title: "Usuário não encontrado!",
        text: "O usuário digitado não foi encontrado na base de dados.",
        icon: "warning",
        dangerMode: true,
      })
    } else if (response.status == 401) {

      await swal({
        title: "Senha incorreta!",
        text: " ",
        icon: "error",
        dangerMode: true,
      })
    }
  },
  async register(router, user) {
    let body = {
      nome: user.nome,
      email: user.email,
      cpf: user.cpf,
      pis: user.pis,
      senha: user.senha,
      pais: user.pais,
      estado: user.estado,
      municipio: user.municipio,
      cep: user.cep,
      rua: user.rua,
      numero: user.numero,
      complemento: user.complemento,

    }

    let config = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch("http://127.0.0.1:5000/auth/register", config);

    if (response.status == 200) {
      await swal({
        title: "Cadastro realizado",
        text: " ",
        icon: "success",

        buttons: {
          visible: false
        },
        timer: 1500
      });
      router.push({
        pathname: '/',

      });
    }


  },
  async updateUser(router, user, endereco, password) {
    const session_token = cookie.get("session_token");

    let body = {
      nome: user.nome,
      email: user.email,
      cpf: user.cpf,
      pis: user.pis,
      senha: user.senha,
      pais: endereco.pais,
      estado: endereco.estado,
      municipio: endereco.municipio,
      cep: endereco.cep,
      rua: endereco.rua,
      numero: endereco.numero,
      complemento: endereco.complemento,
      senha: password,

    }

    let config = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': session_token
      }
    }

    const response = await fetch("http://127.0.0.1:5000/auth/update", config);

    if (response.status == 200) {
      localStorage.setItem("currentUser", JSON.stringify({
        nome: user.nome,
        email: user.email,
        cpf: user.cpf,
        pis: user.pis,
        senha: user.senha,
        endereco: {
          pais: endereco.pais,
          estado: endereco.estado,
          municipio: endereco.municipio,
          cep: endereco.cep,
          rua: endereco.rua,
          numero: endereco.numero,
          complemento: endereco.complemento,
        }
      }))

      await swal({
        text: "Atualização realizada",
        icon: "success",

        buttons: {
          visible: false
        },
        timer: 1500
      });

      router.push({
        pathname: '/main',

      });


    } else {
      await swal({
        text: "Ocorreu um erro",
        icon: "error",

        buttons: {
          visible: false
        },
        timer: 1500
      });
      router.reload(window.location.pathname)
    }


  },

  async deleteUser(router) {
    const session_token = cookie.get("session_token");
    let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': session_token
      }
    }

    const response = await fetch("http://127.0.0.1:5000/auth/delete", config);

    if (response.status == 200) {
      await swal({
        title: "Conta removida",
        text: " ",
        icon: "success",

        buttons: {
          visible: false
        },
        timer: 1500
      });
      cookie.remove('session_token');
      router.push({
        pathname: '/',

      });
    } else {
      await swal({
        text: "Ocorreu um erro",
        icon: "error",

        buttons: {
          visible: false
        },
        timer: 1500
      });
    }
  },

  async getAlreadyUser(email, cpf, pis) {
    var body = {
      email: email,
      cpf: cpf,
      pis: pis
    };
    console.log(body)

    let config = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    await fetch("http://127.0.0.1:5000/login/already", config)
      .then((response) => {
        UserClass.setStatusCode(response.status)
        //setStatusCode(response.status)
        return response.json();
      })
      .then((data) => {
        if (UserClass.statusCode == 200) {
          swal({
            title: data.text,
            text: " ",

            icon: "error",
            dangerMode: false,
          })
          return 200;

        } else if (UserClass.statusCode == 404) {

          return 404;

        } else if (UserClass.statusCode == 401) {
          swal({
            title: "Ocorreu um erro!",
            text: " ",

            icon: "error",
            dangerMode: true,
          })
          return 401;
        }
      })





  }



}