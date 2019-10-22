// http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=01&dateparam=2
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';

const sampleUrl = 'http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=00&dateparam=2';

const getHtml = async () => {
  try {
    return await axios.get(sampleUrl);
  }
  catch (error) {
    console.error(error);
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.url);

  const html = await getHtml();
  // console.log(html.data);
  // const utfhtml = iconv.decode(html.data, 'euc-kr');

  const $ = cheerio.load(html.data);
  console.log($);
  const euckr = $('#con-txt').text();

  // euc-kr convert
  console.log(iconv.decodeStream(euckr, { defaultEncoding: 'EUC-KR' }));
  // const convKorean = await iconv.decode(euckr, 'euc-kr');
  // console.log(convKorean);
  // console.log($('#cont-txt').text());

  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify({ service: euckr }));
};