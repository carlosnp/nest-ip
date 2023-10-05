import { Injectable } from '@nestjs/common';
// import { publicIp, publicIpv4, publicIpv6 } from 'public-ip';

@Injectable()
export class AppService {
  async getHello() {
    // const ipData = await this.getPublicIp();
    return {
      message: 'Hello World!',
      // ...ipData,
    };
  }
  /**
   * Obtiene los datos de la ip publica
   * @returns
   */
  // async getPublicIp() {
  //   const ip = await publicIp();
  //   const ipv4 = await publicIpv4();
  //   const ipv6 = await publicIpv6();
  //   return { ip, ipv4, ipv6 };
  // }
}
