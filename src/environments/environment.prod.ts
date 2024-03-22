const server = {
    protocol: 'http',
    hostname: '64.23.166.118',
    port: '8090'
  };

export const environment = {
    production: true,
    baseUrlEmployees: `${server.protocol}://${server.hostname}:${server.port}/api/v1/employees`,
    baseUrlRequestVacation: `${server.protocol}://${server.hostname}:${server.port}/api/v1/request-vacations`,
    baseUrlUsers: `${server.protocol}://${server.hostname}:${server.port}/api/v1/users`,
};
