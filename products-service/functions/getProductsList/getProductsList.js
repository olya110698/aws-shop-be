import { Client } from "pg";
//const { Client } = require("pg");

const handleResponse = (products = {}, status = 200) => ({
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",
  },
  statusCode: status,
  body: JSON.stringify(products),
});

const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD } = process.env;

const credentials = {
  user: PG_USERNAME,
  host: PG_HOST,
  database: PG_DATABASE,
  password: PG_PASSWORD,
  port: PG_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000,
};

let data_export = {},
  error_code = 200;

export const handler = async (event) => {
  const client = new Client(credentials);

  await client.connect();

  await client
    .query(
      "SELECT products.*, stocks.count FROM products LEFT JOIN stocks ON products.id = stocks.product_id"
    )
    .then((res) => {
      data_export = res.rows;
    })
    .catch((e) => {
      data_export = "DB Error 500:" + e.stack;
      error_code = 500;
    });

  await client.end();

  return await handleResponse({ data_export, error_code });
};
