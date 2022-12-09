import express from 'express';
import helmet from 'helmet';
import { Proxies } from './proxy';

const app = express();

// Use the helmet middleware to set default security headers
app.use(helmet());

// Create a new instance of the Proxies class
const proxies = new Proxies();

// Define a route for getting all proxies
app.get('/proxies', (req, res) => {
  // Return the list of proxies
  res.json(proxies.getAll());
});

// Define a route for creating a new proxy
app.post('/proxies', (req, res) => {
  // Create a new proxy
  proxies.create(req.body)
    .then(proxy => {
      // Return a success message
      res.json({
        message: 'Proxy created',
        statusCode: 200
      });
    })
    .catch(error => {
      // Return an error message
      res.status(500).json({
        error: error.message,
        statusCode: 500
      });
    });
});

// Define a route for deleting a proxy
app.delete('/proxies/:domain', (req, res) => {
  // Delete the proxy
  proxies.delete(req.params.domain, req.query.keepCertificate<baloolean>)
    .then(() => {
      // Return a success message
      res.json({
        message: 'Proxy deleted',
        statusCode: 200
      });
    })
    .catch(error => {
      // Return an error message
      res.status(500).json({
        error: error.message,
        statusCode: 500
      });
    });
});

export default app;
