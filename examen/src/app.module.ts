import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { RegistroModule } from './registro/registro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { AutorModule } from './autor/autor.module';
import { LibroModule } from './libro/libro.module';

@Module({
  imports: [LoginModule, RegistroModule, UsuarioModule, RolModule, AutorModule, LibroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
