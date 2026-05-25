import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
} from '@nestjs/common';
import { Public } from '../auth';
import { SensorsService } from './sensors.service';

@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Post('agua')
  @HttpCode(200)
  @Public()
  recordWaterLevel(@Body('value') value: unknown) {
    if (value === undefined || value === null) {
      throw new BadRequestException(
        'Valor do sensor nao fornecido no payload.',
      );
    }

    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) {
      throw new BadRequestException('Valor do sensor precisa ser numerico.');
    }

    this.sensorsService.setWaterLevel(numericValue);
    return { message: 'Dado registrado com sucesso.' };
  }

  @Get('status')
  @Public()
  getStatus() {
    return {
      message: 'API Alert Nupdec operante',
      sensor_hw038: this.sensorsService.getWaterLevel(),
    };
  }
}
