import { createContext, useState } from "react";

const initialValue = {
    currentUser:{},
    setCurrentUser:() => {},
    cadUser:{},
    setCadUser:() => {},
    isLogged:false,
    setIsLogged:()=>{},
}

export const UserContext = createContext(initialValue);

export const UserContextProvider = ({children}) =>{   

    const [currentUser, setCurrentUser] = useState({});    
    const [cadUser, setCadUser] = useState({});    
    const [isLogged, setIsLogged] = useState({});    
    
    return(
        <UserContext.Provider value={{currentUser, setCurrentUser, isLogged, setIsLogged, cadUser, setCadUser}}>
            {children}
        </UserContext.Provider>
    )
}