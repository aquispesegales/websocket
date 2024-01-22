import { Module } from "@nestjs/common";
import { WebsocketGateway } from "../websockets/websoclet.gateway";

@Module({
    providers: [WebsocketGateway],
})
export class GatewayModule{

}