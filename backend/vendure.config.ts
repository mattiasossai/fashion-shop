import { VendureConfig } from '@vendure/core';
import { DefaultJobQueuePlugin } from '@vendure/core';
import { DefaultSearchPlugin } from '@vendure/core';
import * as path from 'path';

export const config: VendureConfig = {
  apiOptions: {
    port: 3000,
    host: '0.0.0.0',             // <<< hier hinzufügen
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    adminApiPlayground: true,    // Admin-Playground aktivieren
    shopApiPlayground: true,     // Shop-Playground aktivieren
    // CORS öffnen, damit der Proxy im Playground auf Deine API zugreifen kann:
    adminApiCors: { origin: '*' },
    shopApiCors: { origin: '*' },
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
    // …Deine weiteren Plugins
  ],
};
