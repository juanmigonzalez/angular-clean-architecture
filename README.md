# Angular Clean Architecture Template

This repository is intended to serve as a template for developing an Angular project with clean architecture.

This architecture allows you to keep the business logic separate, so you can use this idea for use with other frameworks just by extracting the "lib" folder from it.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Dependencies

This projects is built with `pnpm` and is configured using this depedencies to ensure good practices:

- commit-lint
- eslint
- husky
- jest

## Relevant commands

`pnmp run start` -> Run the aplication

`pnmp run test` -> Run all the tests

`pnmp run test:fucntional` -> Run only functional tests

`pnmp run test:integration` -> Run only integration tests

`pnmp run test:unit` -> Run only unit tests
