import { Module } from '@nestjs/common';
import { GatewayModule } from './websockets/websocket.module';
import {PagoQrController} from './PagoQrController';


@Module({
  imports: [GatewayModule],
  controllers: [PagoQrController],
  providers: [],
})
export class AppModule {}
