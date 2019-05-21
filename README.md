# Search Cities

[![Build Status](https://badgen.net/travis/julio-cesar-development/search-cities?icon=travis)](https://travis-ci.org/julio-cesar-development/search-cities)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=julio-cesar-development_search-cities&metric=alert_status)](https://sonarcloud.io/dashboard?id=julio-cesar-development_search-cities)
[![GitHub Status](https://badgen.net/github/status/julio-cesar-development/search-cities)](https://github.com/julio-cesar-development/search-cities)
<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/24993dd7-3c1c-44bd-9a4c-63f0621524cb/deploy-status)](https://app.netlify.com/sites/search-cities-js/deploys) -->

> This project was made with Vue JS in frontend and an API with NodeJS and Express, and its purpose is search cities according to the selected state. It can be executed with docker

<!-- See project [Search Cities](https://search-cities-js.netlify.com) -->

## Running with Docker

```bash
# it'll just start all services
docker-compose up

# it'll start all services in daemon mode
docker-compose up -d

# it'll build and start all services
docker-compose up --build

# it'll build and start all services in daemon mode
docker-compose up -d --build
```

## Running apart

## API

``` bash
# creating db
mysql -u [user] -p[password] -e "CREATE SCHEMA IF NOT EXISTS db_vue_select"

# populating db
mysql -u [user] -p[password] db_vue_select < data.sql

# install dependencies
npm install

# run API in development mode
npm start
# or
npm run dev

# run API in production mode
npm run prod
```

## Frontend

``` bash
# install dependencies
npm install

# serve in development mode
npm start
# or
npm run dev

# build for production
npm run build

# run unit tests
npm run unit

# run all tests => mocha and chai
npm test
```

## Versioning

V1.1.0 [See Tags](https://github.com/julio-cesar-development/search-cities/tags).

## Authors

* **Julio Cesar** - *Initial work* - [Blackdevs](https://blackdevs.com.br)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
