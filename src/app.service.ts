import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ip as addressIp } from 'address';
import { NetworkInterfaceInfo, networkInterfaces } from 'os';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  /**
   * Constructor del servicio
   * @param httpService
   */
  constructor(private readonly httpService: HttpService) {}
  /**
   * Hola mundo
   * @returns
   */
  async getHello() {
    const ip = this.getAddressIp();
    const osIp = this.getIpOs();
    const ipPublica = await this.getIpHttp();
    this.getIpHttp();
    return {
      message: 'Hello World!',
      address: ip,
      ipPublica,
      ...osIp,
    };
  }
  /**
   * Obtiene los datos de la ip publica
   * @returns
   */
  getAddressIp() {
    const ip = addressIp();
    return ip;
  }
  /**
   * Get la ip usando os
   * @returns
   */
  getIpOs() {
    const interfaces: NodeJS.Dict<NetworkInterfaceInfo[]> = networkInterfaces();
    const local = interfaces['lo'];
    const eth0: NetworkInterfaceInfo[] = interfaces['eth0'];
    return { local, eth0 };
  }
  /**
   * Get ip http
   * @returns
   */
  async getIpHttp() {
    const url = 'http://ipecho.net/plain';
    const response = this.httpService.get(url);
    const res = await firstValueFrom(response);
    return res.data;
  }
}
