import { NextApiRequest, NextApiResponse } from 'next';

type handleApiRequest = (req: NextApiRequest, res: NextApiResponse) => void;

export const requestHelper = (handleApiRequest: handleApiRequest) => (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Cookie', 'test');

  return handleApiRequest(req, res);
};