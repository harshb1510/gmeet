import { createContext, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null)

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}
const SocketProvider = () =>{
    const [children] = props
    const [socket,setSocket] = useState(null);
    
    useEffect(()=>{
        const connection = io();
        console.log(connection)
        setSocket(connection);
    },[])
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}