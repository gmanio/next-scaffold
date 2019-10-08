import { NextApiRequest, NextApiResponse } from 'next';
import { requestHelper } from '../middleware/requestHelper';

const healthApi = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ service: 'ok' }));
};

export default requestHelper(healthApi);
