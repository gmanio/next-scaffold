import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    // Process your POST request
  } else {
    // Handle the rest of your HTTP methods
  }

  console.log(req.query);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ name: 'Nextjs' }));
};