| Env variable             | Purpose                                 | Default value                         |
| ------------------------ | --------------------------------------- | ------------------------------------- |
| SERVICE_NAME             | Service name                            | Account                               |
| NODE_ENV                 | Environment                             | local                                 |
| HTTP_PORT                | Port where app is listening             | 9000                                  |
| HTTP_HOST                | Port where app is located               | localhost                             |
| HTTP_PREFIX              | Application http refix                  | /api/account/                         |
| HTTP_VERSION             | Application http version                | 1                                     |
| DB_TYPE                  | Database type                           | postgres                              |
| DB_HOST                  | Port where database is located          | localhost                             |
| DB_PORT                  | Port where database is listening        | 5132                                  |
| DB_DATABASE              | Database name                           | account-db                            |
| DB_USERNAME              | Username for database                   | postgres                              |
| DB_PASSWORD              | Password for database                   | password                              |
| DB_LOGGING               | Is logging enable or not                | false                                 |
| DB_ENTITIES              | Entities schemas location               | dist/\*_/_.entity.js                  |
| DB_MIGRATIONS            | Migrations location                     | dist/module/database/migrations/\*.js |
| DB_MIGRATIONS_RUN        | Automatic migrations running            | true                                  |
| DB_MIGRATIONS_TABLE_NAME | Table name consisting database metadata | typeorm_metadata                      |
