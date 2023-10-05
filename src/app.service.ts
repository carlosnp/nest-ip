import { Injectable } from '@nestjs/common';
import { ip as addressIp } from 'address';

@Injectable()
export class AppService {
  /**
   * Hola mundo
   * @returns
   */
  async getHello() {
    const ip = this.getAddressIp();
    return {
      message: 'Hello World!',
      address: ip,
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
}
