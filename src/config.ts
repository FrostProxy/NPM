import dotenv from 'dotenv';

// Load the environment variables from the .env file
dotenv.config();

if (!process.env.AUTHORIZATION) {
  throw new Error('AUTHORIZATION environment variable is required');
}

// Define the configuration object
const config = {
  ip: "api.frostproxy.com",
  authorization: process.env.AUTHORIZATION || '',
};

config.set = (values: any) => {
  Object.assign(config, values);
};

export { config };