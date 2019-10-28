import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

type handleApiRequest = (req: NextApiRequest, res: NextApiResponse) => void;

export const requestHelper = (handleApiRequest: handleApiRequest) => (req: NextApiRequest, res: NextApiResponse) => {
  const cookies = new Cookies(req, res);
  console.log(cookies.get('tester'));
  cookies.set('tester', 'dfsdfsd', { maxAge: 5000 });

  if (req.method === 'GET') {
  } else {
  }
  return handleApiRequest(req, res);
};