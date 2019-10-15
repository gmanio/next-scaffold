import { NextApiRequest, NextApiResponse } from 'next';
import { dbHelper } from '../middleware/dbHelper';

export default dbHelper(async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log(req);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end();
});