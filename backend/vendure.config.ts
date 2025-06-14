import { VendureConfig } from '@vendure/core';
import { DefaultJobQueuePlugin } from '@vendure/core';
import { DefaultSearchPlugin } from '@vendure/core';
import { join } from 'path';

export const config: VendureConfig = {
  apiOptions: {
    port: 3000,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    playground: {
      admin: true,
      shop: true,
    },
  },
  dbConnectionOptions: {
    type: 'postgres',
    synchronize: false,
    migrations: [join(__dirname, 'migrations/*')],
    host: process.env.DB_HOST || 'localhost',
    port: +(process.env.DB_PORT || 5432),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'vendure',
  },
  authOptions: {
    sessionSecret: process.env.SESSION_SECRET || 'changeme',
    tokenMethod: 'bearer',
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  plugins: [
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    // deine Plugins hier
  ],
};
