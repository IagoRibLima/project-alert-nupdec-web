import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorsModule } from './sensors/sensors.module';
import { AlertasModule } from './alertas/alertas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AreasRiscoModule } from './areas-risco/areas-risco.module';

@Module({
  imports: [
    SensorsModule, 
    AlertasModule, 
    UsuariosModule, 
    AreasRiscoModule],
  controllers: [AppController],
  providers: [
    AppService  
  ],
})
export class AppModule {}
