FROM node:14-alpine
LABEL maintainer="Julio Cesar <julio@blackdevs.com.br>"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 9000

CMD ["npm", "start"]

# Build this image
# docker image build -f Dockerfile -t juliocesarmidia/search-cities-server:latest .

# Run this image
# docker container run --rm --name search-cities-server -p 8080:80 juliocesarmidia/search-cities-server:latest
# docker container run --rm -it --name search-cities-server -p 8080:80 juliocesarmidia/search-cities-server:latest bash
