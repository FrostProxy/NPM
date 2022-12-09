import dotenv from 'dotenv';

// Load the environment variables from the .env file
dotenv.config();

if (!process.env.AUTHORIZATION) {
  throw new Error('AUTHORIZATION environment variable is required');
}

// Define the configuration object
interface Config {
  ip: string;
  port: string | number;
  authorization: string;
  set(values: any): void;
}

// Define the configuration object
const config: Config = {
  ip: process.env.IP || 'api.frostproxy.com',
  port: process.env.PORT || 3434,
  authorization: process.env.AUTHORIZATION,

  // Define the set() method
  set: (values: any) => {
    Object.assign(config, values);
  }
};

export { config };