# TODO API

This is a simple TODO API that allows you to create, retrieve, update, and delete TODO items. You can use this API to manage your tasks efficiently.

## Getting Started

To get started, follow the instructions below:

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

The server should now be running at `http://localhost:4000`.

## API Endpoints

### Create a TODO

- **Method**: POST
- **Endpoint**: `/api/v1/createTodo`
- **Request Body** (JSON):

```json
{
    "title": "Abir Pal",
    "description": "Hello Abir Pal"
}
```

### Get All TODOs

- **Method**: GET
- **Endpoint**: `/api/v1/getTodos`

### Get a Single TODO

- **Method**: GET
- **Endpoint**: `/api/v1/getTodos/{todoId}`

Replace `{todoId}` with the ID of the TODO item you want to retrieve.

### Update a TODO

- **Method**: PUT
- **Endpoint**: `/api/v1/updateTodo/{todoId}`
- **Request Body** (JSON):

```json
{
    "title": "Lakshyadeep Gogoi",
    "description": "Welcome Back"
}
```

Replace `{todoId}` with the ID of the TODO item you want to update.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the open-source community for inspiration and support.

---

Feel free to customize this README as needed and replace placeholders like `your-username` and `your-repo` with your actual GitHub username and repository name.
