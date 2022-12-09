import axios from 'axios';
import { config } from './config';

// Define the Proxy class
export class Proxies {
  // Initialize the list of proxies
  private proxies: any[] = [];

  // Define a method for getting all proxies
  public getAll() {
    return this.proxies;
  }

  // Define a method for creating a new proxy
  public create(data: any) {
    return new Promise((resolve, reject) => {
      // Check that the required data is provided
      if (!data.domain || !data.target) {
        reject(new Error('Invalid request'));
      }

      // Check that the target is valid
      axios.get(data.target)
        .then(() => {
          // Add the new proxy to the list of proxies
          this.proxies.push(data);

          // Return the new proxy
          resolve(data);
        })
        .catch(error => {
          reject(new Error('Invalid target'));
        });
    });
  }

  // Define a method for deleting a proxy
  public delete(domain: string, keepCertificate: boolean) {
    return new Promise<void>((resolve, reject) => {
      // Find the index of the proxy with the specified domain
      const index = this.proxies.findIndex(proxy => proxy.domain === domain);

      // Check if the proxy exists
      if (index === -1) {
        reject(new Error('Could not delete proxy'));
      }

      // Delete the proxy
      this.proxies.splice(index, 1);

      // Return a success message
      resolve();
    });
  }
}
