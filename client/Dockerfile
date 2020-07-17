FROM node:14-alpine as builder
LABEL maintainer="Julio Cesar <julio@blackdevs.com.br>"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.19-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

RUN sleep 5

# Build this image
# docker image build -f Dockerfile -t juliocesarmidia/search-cities-client:latest .

# Run this image
# docker container run --rm --name search-cities-client -p 80:80 juliocesarmidia/search-cities-client:latest
# docker container run --rm -it --name search-cities-client -p 80:80 juliocesarmidia/search-cities-client:latest bash
