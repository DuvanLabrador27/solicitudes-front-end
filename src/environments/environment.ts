const server = {
    protocol: 'http',
    hostname: 'localhost',
    port: '8080'
};

export const environment = {
    production: false,
    baseUrlEmployees: `${server.protocol}://${server.hostname}:${server.port}/api/v1/employees`,
    baseUrlRequestVacation: `${server.protocol}://${server.hostname}:${server.port}/api/v1/request-vacations`,
    baseUrlUsers: `${server.protocol}://${server.hostname}:${server.port}/api/v1/users`,
};