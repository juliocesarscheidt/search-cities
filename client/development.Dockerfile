FROM node:14-alpine
LABEL maintainer="Julio Cesar <julio@blackdevs.com.br>"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 80

CMD [ "npm", "start" ]

# Build this image
# docker image build -f development.Dockerfile -t juliocesarmidia/search-cities-client:latest .

# Run this image
# docker container run --rm --name search-cities-client -p 8080:80 juliocesarmidia/search-cities-client:latest
# docker container run --rm -it --name search-cities-client -p 8080:80 juliocesarmidia/search-cities-client:latest bash
