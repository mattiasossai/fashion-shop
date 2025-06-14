import { VendureConfig } from '@vendure/core';
import { DefaultJobQueuePlugin } from '@vendure/core';
import { DefaultSearchPlugin } from '@vendure/core';
import * as path from 'path';

export const config: VendureConfig = {
  apiOptions: {
    port: 3000,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    // **DIESEN BLOCK HINZUFÜGEN/PRÜFEN**
    playground: {
      admin: true,    // Admin-API-Playground aktivieren
      shop: true      // Shop-API-Playground aktivieren
    },
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
