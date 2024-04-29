import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs  from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/home/quickpay/public_html/PRD/SSL/quickpay_com_bo.key'),
    cert: fs.readFileSync('/home/quickpay/public_html/PRD/SSL/quickpay_com_bo.crt'),
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  //const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(9083);
}
bootstrap();
