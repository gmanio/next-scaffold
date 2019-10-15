import mysql from 'mysql2';
import { NextApiRequest, NextApiResponse } from 'next';
import config from '../../ormconfig.json';

type handleApiRequest = (req: NextApiRequest, res: NextApiResponse) => void;

export const dbHelper = (handleApiRequest: handleApiRequest) => async (req: NextApiRequest, res: NextApiResponse) => {
  const pool = mysql.createPool({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  try {
    const [rows, fields] = await pool.promise().query("SELECT COUNT(*) from salaries");
    console.log(rows);
  }
  catch (err) {
    console.log(err);
  }
  // console.log(rows);

  return handleApiRequest(req, res);
};