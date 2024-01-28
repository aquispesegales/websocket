import { 
    MessageBody, 
    OnGatewayConnection, 
    OnGatewayDisconnect, 
    SubscribeMessage, 
    WebSocketGateway, 
    WebSocketServer,
    ConnectedSocket, 
    OnGatewayInit
} from "@nestjs/websockets";
import { Server,Socket } from "socket.io";


//@WebSocketGateway()
@WebSocketGateway({ cors: true })
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
    afterInit(client: Socket) {
        console.log("Socket iniciado");
    }
    @WebSocketServer()
    server: Server;
    
    handleConnection(client: Socket) {
        console.log("Cliente Conectado: "+client.id);
    }
    handleDisconnect(client: Socket) {
        console.log("Cliente Desconectado: "+client.id);
    }

    @SubscribeMessage('confirmaPagoQr')
    handleMessage( @ConnectedSocket() client:Socket, @MessageBody()  data:any){
        console.log(data);
        this.server.emit('confirmaPagoQr',data)
        //client.broadcast.emit('confirmaPagoQr',data)

    }

}