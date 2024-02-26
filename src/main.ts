import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/guards/jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new JwtAuthGuard())
  app.enableCors()

  const options = new DocumentBuilder()
  .setTitle("APppp")
  .setDescription("api doc")
  .setVersion('1.0')
  .addBearerAuth({
    type:"http",
    scheme:"bearer",
    bearerFormat:"JWT",
    name:"JWT",
    description:"ENter Jwt",
    in:"header"
  },"JWT-AUTH").build()

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api",app,document)
  await app.listen(3001);
}
bootstrap();
