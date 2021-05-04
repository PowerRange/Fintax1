1. Build images which contain nodejs 

2. Go to the directory that has your Dockerfile and run the following command to build the Docker image.
docker build . -t nodejs/clientabc
docker build . -t nodejs/clientxyz

3. Run the image
docker run -d -p 4234:4234 nodejs/clientabc
docker run -d -p 4235:4235 nodejs/clientxyz

4. Docker compose AlphaServer
docker-compose up

5. Connect clientabc and clientxyz to AlphaServer
docker container create --name alphaserver -p 8080:8080 -e  NAME=Docker -e CLIENTABC_HOST=nodejs/clientabc -e CLIENTABC_PORT=4234 -e CLIENTXYZ_HOST=nodejs/clientxyz -e   CLIENTXYZ_PORT=4235
