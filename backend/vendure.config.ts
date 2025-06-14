import { VendureConfig } from '@vendure/core';
import { DefaultJobQueuePlugin } from '@vendure/core';
import { DefaultSearchPlugin } from '@vendure/core';
import * as path from 'path';

export const config: VendureConfig = {
  apiOptions: {
    port: 3000,
    hostname: '0.0.0.0',       // <<< vorher "host"
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    adminApiPlayground: true,  // Admin-Playground aktivieren
    shopApiPlayground: true,   // Shop-Playground aktivieren
    cors: { origin: '*' },     // <<< statt adminApiCors / shopApiCors
  },
  dbConnectionOptions: {
    type: 'sqlite',
    synchronize: true,
    database: path.join(__dirname, 'vendure.sqlite'),
  },
  authOptions: {
    sessionSecret: process.env.SESSION_SECRET || 'changeme',
    tokenMethod: 'bearer',
  },
  plugins: [
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    // …deine weiteren Plugins
  ],
};
