# Task Management System

This Task Management System is developed using TypeScript with the objective of assisting teams in managing various tasks, assigning them, and tracking completion status. The system is designed to be flexible and easy to expand in the future.

# For JavaScript in repo
i cannot run ts on my pc so i need to compile it in javascript to run it

## Architecture

- **Object-Oriented Programming (OOP)**: The system employs an object-oriented programming approach to manage classes and objects, ensuring that the code is organized and reusable.
- **Separation of Concerns**: Responsibilities are separated into distinct modules, reducing the complexity of the code.

## Techniques Used

### 1. Classes and OOP
- **`Task` Class**: The main class responsible for handling task data, such as title, description, and completion status.
- **`PriorityTask` Class**: A subclass extending `Task` that adds an additional property for priority (low, medium, high) and overrides the `markCompleted` method to display a specific message.

### 2. SOLID Principles
- **Single Responsibility Principle**: Each class is designed for a specific purpose and does not overlap with others.
- **Open/Closed Principle**: Classes can be extended without modifying existing code.
- **Liskov Substitution Principle**: Subclasses should be able to be used interchangeably with their parent classes without altering behavior.
- **Interface Segregation Principle**: Interfaces are broken down into smaller parts, allowing users to only implement what they need.
- **Dependency Inversion Principle**: The system relies on abstraction and dependency injection to reduce coupling.

### 3. Generics Usage
- **`Queue<T>` Class**: A generic queue implementation that can hold any type of data, increasing flexibility in data management.

### 4. Asynchronous Programming
- **`fetchTasks` Function**: An asynchronous function utilizing `async/await` to fetch data from an API and handle errors with try/catch.

### 5. Higher-Order Functions
- **`createTaskUpdater` Function**: A higher-order function that takes another function as an argument and applies it to a task, enabling flexible status management.

### 6. Array Methods
- Utilizes `map`, `filter`, and `reduce` for efficient array handling:
  - `map`: Creates a new array consisting of the titles of all tasks.
  - `filter`: Returns an array of tasks that are marked as incomplete.
  - `reduce`: Counts the total number of tasks marked as completed.

### 7. Error Handling
- **`parseTaskData` Function**: Uses try/catch to manage errors occurring during JSON parsing.

## Running the Project

1. Install Node.js and TypeScript.
2. Create the files according to the defined structure.
3. Use the following command to run the project:
   ```bash
   npx ts-node index.ts
