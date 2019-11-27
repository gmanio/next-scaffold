// http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=01&dateparam=2
import { NextApiRequest, NextApiResponse } from 'next';
import microCors from 'micro-cors';
// const microCors = require('micro-cors');
const cors = microCors({ allowMethods: ['GET', 'PUT', 'POST'] });
import { ajax } from 'rxjs/ajax';
import cheerio from 'cheerio';
import iconv from 'iconv-lite';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

//const today = http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=0&jiji=01&dateparam=1;
//const weekly = http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=1&jiji=01&dateparam=1
//const monthly = http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=2&jiji=01&dateparam=1

const sampleUrl = 'http://fortune.nate.com/contents/freeunse/dayjiji.nate?jijiPage=3&jiji=00&dateparam=2';


const getHtml = async () => {
  const obs$ = ajax({
    url: sampleUrl,
    method: 'GET'
  }).pipe(
    map(userResponse => console.log('users: ', userResponse)),
    catchError(error => {
      console.log('error: ', error);
      return of(error);
    })
  );
  try {
    // return await ajax(sampleUrl, { responseType: 'arraybuffer' });
    return await obs$.toPromise();
  }
  catch (error) {
    console.error(error);
  }
};

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.url);
  const html = await getHtml();
  // euc-kr convert
  const $ = cheerio.load(iconv.decode(Buffer.from(html.data), 'euc-kr'));
  const text = $('#con_txt').text();
  console.log(text);
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;

  res.json({ service: 'test' });
}

export default api;
