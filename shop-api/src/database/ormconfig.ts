// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '../../development.env' });

export default {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT ?? 5433),
  username: 'postgres',
  password: 'postgres',
  database: process.env.TYPEORM_DATABASE,
  entities: ['./**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../database/migrations/*.{js,ts}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  retryAttempts: 1,
  retryDelay: 3000,
};
