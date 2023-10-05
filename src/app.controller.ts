import { Controller, Get, Req, Ip } from '@nestjs/common';
import { AppService } from './app.service';
import { RealIP } from 'nestjs-real-ip';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(
    @RealIP() ip: string,
    @Req() request: Request,
    @Ip() ipV4: string,
  ) {
    console.log('ip', request.ip);
    console.log('ipV4', ipV4);
    const clientReqIp = request.ip;
    const data = await this.appService.getHello();
    return { clientIp: ip, clientReqIp, ...data };
  }
}
