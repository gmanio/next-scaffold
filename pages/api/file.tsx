import crypto from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const sha = crypto.createHash('sha1');
  sha.update('한글을 입력');
  const hash = sha.digest('hex');
  console.log(hash);
  if (req.method === 'GET') {
    // Process your POST request
  } else {
    // Handle the rest of your HTTP methods
  }
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ service: 'ok' }));
};