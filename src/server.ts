import http from 'http';
import app from './app';
import { config } from './config';

const server = http.createServer(app);

// Listen for incoming requests on the specified port
server.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
