// http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=01&dateparam=2
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import Iconv from 'iconv-lite';

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
  // console.log(Iconv.decode(Buffer.from(html.data), 'euc-kr'));
  // const utfhtml = iconv.decode(html.data, 'euc-kr');
  // console.log(html);
  const $ = cheerio.load(Iconv.decode(Buffer.from(html.data), 'euc-kr'));

  // euc-kr convert
  // const encode = Iconv.decode($('#con_txt').text(), 'euc-kr');
  const text = $('#con_txt').text()
  console.log(text);
  // console.log($('#con_txt').text());
  // console.log(Iconv.encodeStream($('#con_txt').text(), { defaultEncoding: 'euc-kr' }));
  // const convKorean = await iconv.decode(euckr, 'euc-kr');
  // console.log(convKorean);
  // console.log($('#cont-txt').text());
  // const result = eucKrToUtf8($('#con-txt').text());
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ service: text }));
};