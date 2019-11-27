import { NextApiRequest, NextApiResponse } from 'next';
import { dbHelper } from 'middleware/dbHelper';

const queryApi = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  res.setHeader('Content-Type', 'application/json');
  try {
    const [rows, fields] = await dbHelper('SELECT COUNT(*) from salaries');
    res.statusCode = 200;
    // res.end(JSON.stringify(rows));
    res.json(rows);
  }
  catch (e) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: e.toString() }));
  }
};

export default queryApi;
