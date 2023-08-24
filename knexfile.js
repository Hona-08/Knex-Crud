module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'store',
      },
      migrations: {
        directory: './db/migrations',
      },
    },
  };
  