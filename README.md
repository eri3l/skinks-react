# skinks


All code is under /src folder

Before you can run the code and change you need to run:

npm install 

That will install all project dependencies specified in package.json file. 
Whenever you need a new dependent JS library which does something useful
for you it needs to be added into package.json and above command needs
to be re-run.

With above in place you can run the app locally using

npm start

It will open browser with the app and changing sources code and saving
it should automatically recompile and reload the browser tab. Sometimes
I had to reload browser tab.

When you wanna deploy it you need to run

npm run-script build

and in /build folder you will find built optimized app. Copy whole 
build folder content to heroku or other web server and it is
deployed.

The UI is built using Material UI components which is built on top of React
https://material-ui.com/components/box/

The library + react are very idiosyncratic. Once you learn them it is fun. 
But not easy entry.

