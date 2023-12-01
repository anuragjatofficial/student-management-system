## Student Management Application

This repository contains a student management application with a Spring Boot backend and a React frontend.

### Project Structure

* **backend/studentManagement:** Backend API built with Spring Boot
* **frontend/studentManagement:** Frontend application built with React and TypeScript

### Technologies Used

* Backend: `Spring Boot`, `Java`, `JPA`, `Hibernate`, `MySQL`
* Frontend: `React`, `TypeScript`, `Tailwind CSS`

### Installation and Setup

**Backend:**

1. Install Java 17 or later.
2. Install Maven.
3. Clone this repository.
4. Open a terminal and navigate to the `backend/studentManagement` directory.
5. Run the following command to install dependencies:
    ```
    mvn clean install
    ```
6. Run the application using Spring Boot:
    ```
    mvn spring-boot:run
    ```
7. The application will be available at http://localhost:8080/students

**Frontend:**

1. Install Node.js 16 or later.
2. Install yarn or npm.
3. Clone this repository.
4. Open a terminal and navigate to the `frontend/studentManagement` directory.
5. Install dependencies:
    ```
    yarn install
    ```
    or
    ```
    npm install
    ```
6. Start the development server:
    ```
    yarn start
    ```
    or
    ```
    npm start
    ```
7. The application will be available at http://localhost:3000

**API Documentation:**

The API documentation is available at the following URL:

* **Deployed:** [https://studentmanagement-emcr.onrender.com/swagger-ui/index.html](https://studentmanagement-emcr.onrender.com/swagger-ui/index.html)
* **Local:** `http://localhost:8080/swagger-ui/index.html` (accessible when the backend is running)


### API Endpoints

**Student:**

| Method | URL | Description |
|---|---|---|
| GET | /students | Get all students |
| GET | /students/{studentId} | Get a student by ID |
| POST | /students | Add a new student |
| PUT | /students/{studentId} | Update a student |
| DELETE | /students/{studentId} | Delete a student |



### Usage

1. **Get All Students:**

```
GET http://localhost:8080/students
```

2. **Get a Student by ID:**

```
GET http://localhost:8080/students/{student-id}
```

3. **Add a New Student:**

```
POST http://localhost:8080/students
```

Body:

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "phone": "+1234567890",
  "gender": "MALE",
  "dob": "1990-01-01",
  "address": "123 Main Street"
}
```

4. **Update a Student:**

```
PUT http://localhost:8080/students/{student-id}
```

Body:

```json
{
  "firstname": "Jane",
  "lastname": "Doe",
  "phone": "+9876543210",
  "gender": "FEMALE",
  "dob": "1995-02-02",
  "address": "456 Elm Street"
}
```

5. **Delete a Student:**

```
DELETE http://localhost:8080/students/{student-id}
```

### Contributing

**Additional Notes:**

* Please refer to the API documentation for more details about the available endpoints and their parameters.
* The frontend application is a simple example of how to use the API. You can customize it to fit your specific needs.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request.

### License

This project is licensed under the MIT license. See the LICENSE file for details.