import { Injectable } from '@nestjs/common';

@Injectable()
export class SensorsService {
  private waterLevel = 0;

  setWaterLevel(value: number): void {
    this.waterLevel = value;
  }

  getWaterLevel(): number {
    return this.waterLevel;
  }
}
