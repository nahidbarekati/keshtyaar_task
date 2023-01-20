<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## migration

 first deleted mirations and start

```bash
$ npm run migration:generate create-tabels-user-post-group
# create tables and relations with entities file 
$ npm run migration:run

```

```bash
#start for change tables (code for create user_id)
$ npm run migration:generate add-field-userid-post-and-copy-data-from-group-to-post

# change tabels 
$ npm run migration:run

# change tabels and ### befor that uncomment in entities and dto files ###
$ npm run migration:generate create-foreignKey-post-and-user

# final change
$ npm run migration:run


```


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Nahid Barekati


