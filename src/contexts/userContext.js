import { createContext, useState } from "react";

const initialValue = {
    isLogged:false,
    setIsLogged:()=>{},
}

export const UserContext = createContext(initialValue);

export const UserContextProvider = ({children}) =>{   

    const [isLogged, setIsLogged] = useState({});    
    
    return(
        <UserContext.Provider value={{ isLogged, setIsLogged}}>
            {children}
        </UserContext.Provider>
    )
}