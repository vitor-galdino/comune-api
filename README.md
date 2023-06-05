<h1 align="center">Comune App</h1>

<blockquote>
    <br>
        <p>Comune is an application that allows you to manage your contacts in an easy and intuitive way. With a secure registration and login system, you can access your personal dashboard and add, edit and delete contacts.</p>
    <br>
</blockquote>

<blockquote>
    
This repository contains the code for the back-end of the application. The front-end code can be found in the [Comune repository](https://github.com/vitor-galdino/comune-app).
    
</blockquote>

<br>

<h2>Features</h2>

- Secure registration and login system.
- Personal dashboard to manage contacts.
- Add, edit and delete contacts like in a telephone spreadsheet.
- Generate PDF reports with contact information.
- Developed with modern technologies such as Node.js, TypeScript, Express.js, TypeORM and PostgreSQL.

<br>

<h2>Live Version</h2>

Visit the live version of the application hosted at [Comune - Website](https://comune.vercel.app/) to see it in action.

<br>

<h2>Configuration</h2>

Before starting to use the project, it is necessary to configure some environment variables. Create a `.env` file in the root of the project with the following information:

~~~bash
DB_URL=postgres://<user>:<password>@<host>:<port>/<database>
SECRET_KEY=jwt_secret_key
~~~

Replace `<user>`, `<password>`, `<host>`, `<port>` and `<database>` with your PostgreSQL database information.

<br>

<h2>Installation</h2>

Installing and running the project is easy and fast. Just follow these steps:

1. Clone the repository: `git clone https://github.com/vitor-galdino/comune-server.git`
2. Install dependencies: `yarn install`
3. Run database migrations: `yarn migrate`
4. Start the server: `yarn dev`
5. Access `http://localhost:3000` in your browser, Insomnia or Postman and start using the application!

<br>

<h2>Database Commands</h2>

The project includes some useful commands for managing the database. Here is a list of available commands:

- `yarn generate ./src/migrations/NameOfMigration -d ./src/data-source.ts`: generates a new migration with the specified name.
- `yarn migrate`: runs all pending migrations.

To use these commands, simply type the desired command into your terminal. For example:

~~~bash
yarn generate ./src/migrations/CreateUsersTable -d ./src/data-source.ts
yarn migrate
~~~

<br>

<h2>Endpoints</h2>

---

<details> 
    <summary>Users</summary>

<br>

The User object is defined as:

| Field      | Type   | Description                                     |
| -----------|--------|-------------------------------------------------|
| id         | number        | Unique identifier of the user.           |
| fullName   | string        | The user’s name.                         |
| email      | string        | The user’s email.                        |
| password   | string        | The user’s access password.              |
| phone      | string        | The user’s phone number.                 |
| createdAt  | string (date) | The date the user was created.           |

### Endpoints

| Method   | Route      | Description                             |
|----------|------------|-----------------------------------------|
| POST     | /login     | Access to the application.              |
| POST     | /users     | Creation of a user.                     |
| GET      | /users     | Lists the user.                         |
| PATCH    | /users     | Updates the user’s data.
| DELETE   | /users     | Deletes the user.


<br>

---

<br>

### 1.1. Login

### `/login`

### Request Example:
```
POST /login
Authorization: None
Content-type: application/json
```

### Request Body:
```json
{
    "email": "example@mail.com",
    "password": "123456"
}
```

### Response Example:
```
200 OK
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5c..."
}
```

<br>

---

<br>

### 1.2. User Creation

### `/users`

### Request Example:
```
POST /users
Authorization: None
Content-type: application/json
```

### Request Body:
```json
{
  "fullName": "example name",
  "email": "example@mail.com",
  "password": "123456",
  "phone": "11999999999"
}
```

### Response Example:
```
201 Created
```

```json
{
	"id": 1,
	"fullName": "example name",
	"email": "example@mail.com",
	"phone": "11999999999",
	"createdAt": "2023-06-04"
}
```

<br>

---

<br>

### 1.3. List User

### `/users`

### Request Example:
```
GET /users
Authorization: Bearer Token
Content-type: application/json
```

### Response Example:
```
200 OK
```
```json
{
	"id": 1,
	"fullName": "example name",
	"email": "example@mail.com",
	"phone": "11999999999",
	"createdAt": "2023-06-04",
	"contacts": [
		{
			"id": 1,
			"fullName": "contact example",
			"email": "contact@mail.com",
			"phone": "41999999999",
			"createdAt": "2023-06-04"
		},
	]
}
```

<br>

---

<br>

### 1.4. Update User

### `/users`

### Request Example:
```
PATCH /users
Authorization: Bearer Token
Content-type: application/json
```

### Request Body (Optional Fields):
```json
{
  "fullName": "example name updated",
  "email": "example.updated@mail.com",
  "password": "1234",
  "phone": "1188888888"
}
```

### Response Example:
```
200 OK
```

```json
{
	"id": 1,
	"fullName": "example name updated",
	"email": "example.updated@mail.com",
	"phone": "1188888888",
	"createdAt": "2023-06-04"
}
```

<br>

---

<br>

### 1.5. Delete User

### `/users`

### Request Example:
```
DELETE /users
Authorization: Bearer Token
Content-type: application/json
```

### Response Example:
```
204 No Content
```

<br>

---

<br>

</details>

<details> 
    <summary>Contacts</summary>

<br>

The Contact object is defined as:

| Field      | Type   | Description                                     |
| -----------|--------|-------------------------------------------------|
| id         | number        | Unique identifier of the user.           |
| fullName   | string        | The contact name.                        |
| email      | string        | The contact email.                       |
| phone      | string        | The contact phone number.                |
| createdAt  | string (date) | The date the contact was created.        |

### Endpoints

| Method   | Route      | Description                             |
|----------|------------|-----------------------------------------|
| POST     | /users/contacts              | Create contact.                |
| GET      | /users/contacts              | List all user contacts.        |
| GET      | /users/contacts/:contact_id  | Lists a contact using its ID as a parameter. |
| PATCH    | /users/contacts/:contact_id  | Update the contact data using its ID as a parameter.
| DELETE   | /users/contacts/:contact_id  | Delete the contact using its ID as a parameter.


<br>

---

<br>

### 1.1. Create Contact

### `/users/contacts`

### Request Example:
```
POST /users/contacts
Authorization: Bearer Token
Content-type: application/json
```

### Request Body:
```json
{
  "fullName": "example contact name",
  "email": "example@mail.com",
  "phone": "11999999999"
}
```

### Response Example:
```
201 Created
```

```json
{
	"id": 1,
	"fullName": "example contact name",
	"email": "example@mail.com",
	"phone": "11999999999",
	"createdAt": "2023-06-04"
}
```

<br>

---

<br>

### 1.2. List Contact

### `/users/contacts`

### Request Example:
```
GET /users/contacts
Authorization: Bearer Token
Content-type: application/json
```

### Response Example:
```
200 OK
```
```json
[
	{
		"id": 3,
		"fullName": "newcontact",
		"email": "newcontact@mail.com",
		"phone": "+55222341231",
		"createdAt": "2023-05-27"
	},
	{
		"id": 4,
		"fullName": "example",
		"email": "example@example.com",
		"phone": "123-456-7890",
		"createdAt": "2023-05-27"
	}
]
```

<br>

---

<br>

### 1.3. List Contact By ID

### `/users/contacts/:contact_id`

### Request Example:
```
GET /users/contacts/:contact_id
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parameter   | Type        | Description                             |
|-------------|-------------|---------------------------------------|
| contact_id  | string      | Unique identifier of the contact (Contact) |

### Response Example:
```
200 OK
```
```json
{
	"id": 4,
	"fullName": "example",
	"email": "example@example.com",
	"phone": "123-456-7890",
	"createdAt": "2023-05-27"
}
```

<br>

---

<br>

### 1.4. Update Contact By ID

### `/users/contacts/:contact_id`

### Request Example:
```
PATCH /users/contacts/:contact_id
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parameter   | Type        | Description                             |
|-------------|-------------|---------------------------------------|
| contact_id  | string      | Unique identifier of the contact (Contact) |

### Request Body (Optional Fields):
```json
{
	"fullName": "example name updated",
	"email": "example.updated@mail.com",
	"phone": "11999999999",
}
```

### Response Example:
```
200 OK
```

```json
{
	"id": 4,
	"fullName": "example name updated",
	"email": "example.updated@mail.com",
	"phone": "1188888888",
	"createdAt": "2023-06-04"
}
```

<br>

---

<br>

### 1.5. Delete Contact By ID

### `/users/contacts/:contact_id`

### Request Example:
```
DELETE /users/contacts/:contact_id
Authorization: Bearer Token
Content-type: application/json
```

### Parâmetros da Requisição:
| Parameter   | Type        | Description                             |
|-------------|-------------|---------------------------------------|
| contact_id  | string      | Unique identifier of the contact (Contact) |

### Response Example:
```
204 No Content
```

<br>

---

<br>

</details>

<details> 
    <summary>Reports</summary>

### 1.1. User Report

### `/reports`

### Request Example:
```
GET /reports
Authorization: Bearer Token
Content-type: application/pdf
```

### Response Example:
```
200 OK
```
```
Content-Type: application/pdf
Content-Disposition: attachment; filename=relatorio_DD-MM-YYYY.pdf
```

<br>

---

<br>

</details>

<br>

<h2>Technologies used</h2>

- [Node.js](https://nodejs.org/): server-side JavaScript runtime environment for building scalable applications.
- [TypeScript](https://www.typescriptlang.org/): typed programming language that increases code productivity and readability.
- [Express.js](https://expressjs.com/): minimalist and flexible web framework for Node.js.
- [TypeORM](https://typeorm.io/): powerful and easy-to-use ORM for TypeScript and JavaScript.
- [PostgreSQL](https://www.postgresql.org/): robust and reliable relational database management system.

<br>

<h2>Contributing</h2>

To contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch: `git checkout -b feat/your-feature-name`
3. Make your changes and commit them using Conventional Commits
4. Push to the branch: `git push origin feat/your-feature-name`
5. Submit a pull request

<br>

<h2>Contact</h2>

If you have any questions or suggestions about this project, please contact [Vitor Galdino](https://linkedin.com.br/in/vitorgaldino/).
