import { createContext, useState } from "react";

const initialValue = {
    isLogged:false,
    setIsLogged:()=>{},
    statusCode:0,
    setStatusCode:()=>{},
}

export const UserContext = createContext(initialValue);

export const UserContextProvider = ({children}) =>{   

    const [isLogged, setIsLogged] = useState({});    
    const [statusCode, setStatusCode] = useState();    
    
    return(
        <UserContext.Provider value={{ isLogged, setIsLogged, statusCode, setStatusCode}}>
            {children}
        </UserContext.Provider>
    )
}