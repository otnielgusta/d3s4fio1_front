import cookie from 'js-cookie';
import { useContext } from 'react/cjs/react.production.min';
import swal from 'sweetalert';



module.exports = {

    async login(setCurrentUser, router, usuario, senha) {

        const body = {
           email: usuario,
           senha: senha
         };
     
           let config = {
             method:'POST',
             body:JSON.stringify(body),
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             }
           }
     
           const response =  await fetch("http://127.0.0.1:5000/auth/login",config)
     
           if(response.status == 200){
             const data = await response.json()
             console.log(data);
             cookie.set("session_token", data.token)
             setCurrentUser(data.user)
    
             
             router.push({
                pathname: '/main',
                               
              });
           }else if(response.status == 403){
            await swal({
                title: "Usuário não encontrado!",
                text: "O usuário digitado não foi encontrado na base de dados.",
                icon: "warning",
                dangerMode: true,
              })
           }else if(response.status == 401){
            await swal({
                title: "Senha incorreta!",
                icon: "error",
                dangerMode: true,
              })
           }
         
       },

    async auth(router, setIsLogged){
        const session_token = cookie.get("session_token");
        let config = {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization': session_token
            }
        }
        fetch("http://127.0.0.1:5000/auth/auth", config)
        .then(async (response) =>{
            if (response.status == 200){
                setIsLogged(true);
            }else if(response.status == 403){
                setIsLogged(false);

                await swal({
                    title: "Token expirado!",
                    text: "O seu token de sessão expirou.",
                    icon: "warning",
                    dangerMode: true,
                  })
                .then(()=>{
                    router.push({
                        pathname: '/',
                                       
                      });
                      
                });
                
            }else if(response.status == 401){
                setIsLogged(false);

                await swal({
                    title: "Acesso não autorizado!",
                    text: "Você não possui permissão para acessar esta página.",
                    icon: "warning",
                    dangerMode: true,
                  })
                .then(()=>{
                    router.push({
                        pathname: '/',                                       
                      });
                });

            }
        })
        
        ;
    },

    async register(router, user){
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
            complemento:user.complemento,

        }

        let config = {
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          }

          const response =  await fetch("http://127.0.0.1:5000/auth/register",config);

          if(response.status == 200){
            await swal({
                text:"Cadastro realizado",
                icon: "success",
                
                buttons:{
                    visible: false
                },
                timer:1500
              });
            router.push({
               pathname: '/',
                              
             });
          }


    }


   
}