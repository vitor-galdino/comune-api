<h1 align="center">Comune App</h1>

<blockquote>
    <br>
        <p>Comune is an application that allows you to manage your contacts in an easy and intuitive way. With a secure registration and login system, you can access your personal dashboard and add, edit and delete contacts.</p>
    <br>
</blockquote>

<br>
<br>

<h2>Features</h2>
<hr>

- Secure registration and login system.
- Personal dashboard to manage contacts.
- Add, edit and delete contacts like in a telephone spreadsheet.
- Generate PDF reports with contact information.
- Developed with modern technologies such as Node.js, TypeScript, Express.js, TypeORM and PostgreSQL.

<br>

<h2>Live Version</h2>
<hr>

Visit the live version of the application hosted at [Comune App - Website](https://comune.vercel.app/) to see it in action.

<br>

<h2>Configuration</h2>
<hr>

Before starting to use the project, it is necessary to configure some environment variables. Create a `.env` file in the root of the project with the following information:

~~~bash
DB_URL=postgres://<user>:<password>@<host>:<port>/<database>
SECRET_KEY=jwt_secret_key
~~~

Replace `<user>`, `<password>`, `<host>`, `<port>` and `<database>` with your PostgreSQL database information.

<br>

<h2>Installation</h2>
<hr>

Installing and running the project is easy and fast. Just follow these steps:

1. Clone the repository: `git clone https://github.com/vitor-galdino/comune-server.git`
2. Install dependencies: `yarn install`
3. Run database migrations: `yarn migrate`
4. Start the server: `yarn dev`
5. Access `http://localhost:3000` in your browser, Insomnia or Postman and start using the application!

<br>

<h2>Database Commands</h2>
<hr>

The project includes some useful commands for managing the database. Here is a list of available commands:

- `yarn generate ./src/migrations/NameOfMigration -d ./src/data-source.ts`: generates a new migration with the specified name.
- `yarn migrate`: runs all pending migrations.

To use these commands, simply type the desired command into your terminal. For example:

~~~bash
yarn generate ./src/migrations/CreateUsersTable -d ./src/data-source.ts
yarn migrate
~~~

<br>

<h2>Technologies used</h2>
<hr>

- [Node.js](https://nodejs.org/): server-side JavaScript runtime environment for building scalable applications.
- [TypeScript](https://www.typescriptlang.org/): typed programming language that increases code productivity and readability.
- [Express.js](https://expressjs.com/): minimalist and flexible web framework for Node.js.
- [TypeORM](https://typeorm.io/): powerful and easy-to-use ORM for TypeScript and JavaScript.
- [PostgreSQL](https://www.postgresql.org/): robust and reliable relational database management system.

<br>

<h2>Contributing</h2>
<hr>

To contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b feat/your-feature-name`
3. Make your changes and commit them using Conventional Commits
4. Push to the branch: `git push origin feat/your-feature-name`
5. Submit a pull request

<br>

<h2>Contact</h2>
<hr>

If you have any questions or suggestions about this project, please contact [Vitor Galdino](https://linkedin.com.br/in/vitorgaldino/).