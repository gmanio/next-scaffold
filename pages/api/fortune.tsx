// http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=01&dateparam=2
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

const sampleUrl = 'http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=00&dateparam=2';

const getHtml = async () => {
  try {
    return await axios.get(sampleUrl, { responseType: 'arraybuffer' });
  }
  catch (error) {
    console.error(error);
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.url);
  const html = await getHtml();
  // euc-kr convert
  const $ = cheerio.load(iconv.decode(Buffer.from(html.data), 'euc-kr'));
  const text = $('#con_txt').text();
  console.log(text);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  res.json({ service: text });
};