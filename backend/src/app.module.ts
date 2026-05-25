import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule, JwtAuthGuard } from './modules/auth';
import { SensorsModule } from './modules/sensors/sensors.module';
import { AlertasModule } from './modules/alertas/alertas.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { AreasRiscoModule } from './modules/areas-risco/areas-risco.module';

@Module({
  imports: [
    AuthModule, 
    SensorsModule, 
    AlertasModule, 
    UsuariosModule, 
    AreasRiscoModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
