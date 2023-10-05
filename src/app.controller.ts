import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@RealIP() ip: string) {
    const data = await this.appService.getHello();
    return { myIp: ip, ...data };
  }
}
