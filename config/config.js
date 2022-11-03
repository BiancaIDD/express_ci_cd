import dotenv from 'dotenv';

dotenv.config();

export default {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,

        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },

    },
    test: {
        username: process.env.DB_USER || 'user2' ,
        password: process.env.DB_PASSWORD || '123456',
        database: process.env.DB_NAME || 'postgres_prueba',

        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },

    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,

        host: process.env.DB_HOST,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },

    },
};
