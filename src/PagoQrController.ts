import { Controller, Get,Param } from '@nestjs/common';

const { io } = require("socket.io-client");

@Controller('api/pago-qr-controller')
export class PagoQrController {
    @Get('/notificar/:alias')
    NotificaPagoQr(@Param('alias') alias: string) {

        const socket = io("ws://localhost:9082");
        socket.on('connect',()=>{
            socket.emit("confirmaPagoQr", alias);
        })

    }
}