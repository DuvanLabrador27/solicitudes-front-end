const server = {
    protocol: 'http',
    hostname: '64.23.166.118',
    port: '80'
  };

export const environment = {
    production: true,
    baseUrlEmployees: `${server.protocol}://${server.hostname}/api/v1/employees`,
    baseUrlRequestVacation: `${server.protocol}://${server.hostname}/api/v1/request-vacations`,
    baseUrlUsers: `${server.protocol}://${server.hostname}/api/v1/users`,
};
