const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'admin',
    password: 'admin1234',
    database: 'store-db'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
