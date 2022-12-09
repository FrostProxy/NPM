## Reverse Proxy
A simple reverse proxy server that allows you to easily create and manage proxies for your domains.

# Installing
To install the package, run the following command:
```js
npm install frostproxy
```

# Using
To create a new proxy, use the `Proxies` class from the package:
```js
import { Proxies } from 'frostproxy';

// Create a new instance of the Proxies class
const proxies = new Proxies();

// Define the data for the new proxy
const data = {
  domain: 'example.com',
  target: 'http://target.com:8080',
  ssl: true
};

// Create the new proxy
proxies.create(data)
  .then(proxy => {
    // The proxy was created successfully
  })
  .catch(error => {
    // An error occurred
  });
```