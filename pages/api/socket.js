import { Server } from "socket.io";

const SocketHandler =(req,res)=>{
    console.log("called api")
    if(res.socket.server.io){
        console.log("Server already running");
     
    }else{
        const io = new Server(res.socket.server);
        res.socket.server.io=io;
        io.on('connection',(socket)=>{
            console.log("Server is running"); 
        });
    }
    res.end();
}
export default SocketHandler; 