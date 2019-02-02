import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [LoginModule, RegistroModule, UsuarioModule, RolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
