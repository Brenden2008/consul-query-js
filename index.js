import { Resolver } from 'node:dns';

export class ConsulQuery {
    constructor(ip, port) {
        this.resolver = new Resolver();
        this.resolver.setServers([`${ip}:${port}`]);
    }
    
    async getService(serviceName) {
        return new Promise((resolve, reject) => {
            this.resolver.resolve4(`${serviceName}.service.consul`, (err, addresses) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(addresses);
                }
            });
        });
    }
}