import http from "http";
import * as fs from 'fs';
import { formatInTimeZone } from 'date-fns-tz';

const filename = '/Users/daviddavis/history/history.txt';
const timeZone = 'America/Chicago';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const timeStamp = formatInTimeZone(new Date(), timeZone, 'yyyy-MM-dd HH:mm:ssXXX');
  const line = timeStamp + ' ' + requestUrl.searchParams.get('u') + '\n';
  fs.appendFile(filename, line, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
  });
});
