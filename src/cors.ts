import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const optionsCors: CorsOptions = {
  origin: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    /localhost([:]\d*)?$/,
    /192\.168\.\d+\.\d+([:]\d*)?$/,
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'X-Requested-With',
    'X-HTTP-Method-Override',
  ],
  credentials: true,
};
