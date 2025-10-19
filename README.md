Why is your web history missing data?  Many pages are an SPA (Single Page Application)
that can update the address bar and render new content without reloading.
There may be other reasons.
This app keeps a simple text file of your web history.  

Download the directory tree and run the node server to handle web history logging requests.

cd history

npm start

You can configure the node server to run on startup using pm2 or other methods.
If you use pm2 make sure the node package is running when you call "pm2 save".

Install the chrome extension in the chrome folder to begin logging your traffic.
The pages you visit will be appended to history.txt in the history folder.
Add your time zone to history/server.js
