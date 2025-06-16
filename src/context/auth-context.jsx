import { useState } from "react";
import { createContext } from "react";



export const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [ currentUser, setCurrentUsers] = useState(null);

    return(
        <authContext.Provider value={{users, setUsers, currentUser, setCurrentUsers}}>
           {children}
        </authContext.Provider>
    )
}

export default AuthProvider;