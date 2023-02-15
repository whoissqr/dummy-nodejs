# steps to build locally and run
npm install
node app.js
curl localhost:3000

# build docker image
docker build -t examplenode .

# run the docker image
docker run -d -p 3000:3000 --name node-app examplenode
