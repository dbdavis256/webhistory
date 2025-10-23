Why is your web history missing data?  Many pages are an SPA (Single Page Application)
that can update the address bar and render new content without reloading.
There may be other reasons.
This app keeps a simple text file of your web history when the page title or address bar changes.  

Download the directory tree and run the node server to handle web history logging requests.

cd history

npm start

You can configure the node server to run on startup using pm2 or other methods.
If you use pm2 make sure the node package is running when you call "pm2 save".

Install the chrome extension in /chrome to begin logging your traffic.
The pages you visit will be appended to history.txt in the history folder.
Add your time zone to history/server.js
The extension uses a server worker to bypass CORS
How to install a chrome unpacked extension: https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world

The safari extension must be signed.  This guide helped me: https://stackoverflow.com/questions/62748163/how-can-i-sign-a-safari-extension-for-just-one-computer

you can monitor history.txt with macOS using tail and the formatter script I created.
"tail -f history.txt | node formatlog.js"
