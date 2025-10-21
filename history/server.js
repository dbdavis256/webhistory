// run with "npm start"
// listen to port 3000 and write the "t" and "u" querystring vars to history.txt
import http from "http";
import * as fs from 'fs';
import { formatInTimeZone } from 'date-fns-tz';

const filename = './history.txt';
const timeZone = 'America/Chicago';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader("Content-Type", "text/plain");
  //res.end("Hello World\n");
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const timeStamp = formatInTimeZone(new Date(), timeZone, 'yyyy-MM-dd HH:mm:ssXXX');
  const line = timeStamp + ' ' + requestUrl.searchParams.get('u') + ' "' + requestUrl.searchParams.get('t') + '"\n';
  fs.appendFile(filename, line, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
