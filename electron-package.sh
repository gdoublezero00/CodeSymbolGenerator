rm -Rf app;
mkdir app;
cp main.js ./app && cp -r ./build/* ./app && cp package.json ./app && cd ./app && rm -Rf node_modules && npm install --production;


