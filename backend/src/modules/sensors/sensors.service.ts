import { Injectable } from '@nestjs/common';

@Injectable()
export class SensorsService {
  private waterLevelPercent = 0;

  setWaterLevel(value: number): void {
    this.waterLevelPercent = this.convertToPercentage(value);
  }

  getWaterLevel(): number {
    return this.waterLevelPercent;
  }

  private convertToPercentage(value: number): number {
    const min = 0;
    const max = 1024;
    const clampedValue = Math.min(Math.max(value, min), max);
    const percentage = (clampedValue / max) * 100;

    return Math.round(percentage * 100) / 100;
  }
}
