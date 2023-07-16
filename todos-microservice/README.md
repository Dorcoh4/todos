# TO-DOs Microservices Backend

This repository contains the backend implementation for a TO-DOs web application using microservices architecture. The system consists of two microservices:

1. **Todos Microservice**: Manages todos with CRUD operations. Runs on port 3000.

2. **Notification Microservice**: Handles sending notifications for approaching todo deadlines. Runs on port 4000.

## Assumptions

1. Authentication: No authentication is required, and there is only a single user.

2. Single User: The application serves a single user. For multi-user support, modifications are needed.

3. `sendNotification()`: We assume this method is implemented.

4. Data Validity: For the purpose of this assignment, we assume the received data is correct and follows the expected structure and format. However, in a real-world scenario, it is crucial to implement proper input validation and error handling to ensure data correctness, integrity, and security.

## How to Run

1. Clone the repository: `git clone https://github.com/Dorcoh4/todos.git`
2. Install dependencies for both microservices.
3. Configure MongoDB connection strings in the microservices' respective config files.
4. Start both microservices:
   - Todos Microservice: `cd todos-microservice && npm start` (Port: 3000)
   - Notification Microservice: `cd notification-microservice && npm start` (Port: 4000)

Ensure MongoDB is running locally or update the connection strings accordingly.

---

Note: Additional enhancements and considerations may be required based on specific requirements and use cases. Input validation and error handling should be implemented in a production-ready application to ensure data correctness, prevent security vulnerabilities, and handle errors or exceptions that may occur during data processing.
