// on macos start with: tail -f history.txt | node formatlog.js
const logs = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})-([\d:]*) (https?:\/\/)(.*?)\/(.*)/i;

let data = '';
process.stdin.on('data', chunk => {
  data += chunk.toString();
  let lines = data.split(/\r?\n/);
  for (const line of lines) {
    let matches = line.match(logs); 
    if (matches) {
      console.log(matches[4] + ':' + matches[5] + ' \x1b[1m' + matches[9] + '\x1b[0m/' + matches[10]);
    }
  }
});
