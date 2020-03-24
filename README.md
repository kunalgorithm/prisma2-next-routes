# Prisma2 Next Todos

A monorepo todo app built with prisma2, nextjs API routes, and ant design dark mode ✨

![Screenshot](public/screenshot.png)

The app is built with [next](https://nextjs.org), and consequently all the action happens in the `pages` directory.

Each "page" gets compiled into a route, so you can visit `pages/users` at http://localhost:3000/users, and so on.

Files in `pages/api`, are also compiled into routes, but instead of exporting as front html files, they're built into backend serverless lambda functions. Most of these output JSON.

## Set up local database

Follow [this guide](https://www.cyberciti.biz/faq/howto-add-postgresql-user-account/) to create a database on `localhost` with user `postgres` and password `postgres` on database `template1`.

The connection string should be `postgres://postgres:postgres@localhost:5432/template1`

Connect to the local database with prisma in schema.prisma

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = "postgres://postgres:postgres@localhost:5432/template1"
}
```

## Run the app

Install dependencies

```
yarn
```

and run the development server

```
yarn dev
```

and deploy on [now](https://zeit.co/now)

```
now

```
