// import { registerAs } from '@nestjs/config';
// import { resolve } from 'path';
// import { DataSource } from 'typeorm';

// export default registerAs('database',  () => new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST || 'localhost',
//   port: parseInt(process.env.DB_PORT) || 5432,
//   username: process.env.DB_USERNAM || 'admin',
//   password: process.env.DB_PASSWORD || 'admin',
//   database: process.env.DB_DATABASE || 'keshtyaar_task',
//   entities:  ['./../modules/**/entities/*.entity.ts'],


//   // Only enable this option if your application is in development,
//   // otherwise use TypeORM migrations to sync entity schemas:
//   // https://typeorm.io/#/migrations
//   // synchronize: false,
//   migrations: ['./../migrations/*.ts'],
//   migrationsTableName: "custom_migration_table",
// }));


import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'admin',
      database: process.env.DB_NAME || 'keshtyaar_task',
      password: process.env.DB_PASSWORD || 'admin',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
      cli: {
        migrationsDir: __dirname + '/../database/migrations',
      },
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: false,
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'admin',
  database: process.env.DB_NAME || 'keshtyaar_task',
  password: process.env.DB_PASSWORD || 'admin',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: __dirname + '/../database/migrations',
  },
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
};

