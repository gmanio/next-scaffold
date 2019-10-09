// import crypto from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

// const iv = Buffer.alloc(16, 0);

export default (req: NextApiRequest, res: NextApiResponse) => {
  // const key = crypto.scryptSync('password', 'salt', 24);
  // const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
  // const deCipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
  // cipher.setAutoPadding(false);
  // deCipher.setAutoPadding(false);
  // cipher.update('dfsdfdsf', 'utf8', 'base64');
  //
  // const encrypt = cipher.final('base64');
  // console.log(encrypt);
  //
  // deCipher.update(encrypt, 'base64', 'utf8');
  // const decrypted = deCipher.final('utf8');
  // console.log(decrypted);

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ service: 'ok' }));
};