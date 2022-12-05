import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
    JWT_SECRET: process.env.JWT_SECRET
}