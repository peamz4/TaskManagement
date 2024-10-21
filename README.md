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


### Grading & Rubric
- Part 1: คลาสและการเขียนโปรแกรมเชิงวัตถุ
สร้างคลาส Task ที่เก็บข้อมูลของงานแต่ละงาน รวมถึงชื่อ, รายละเอียด, และสถานะว่าทำเสร็จยัง
สร้างเมธอดสำหรับทำเครื่องหมายว่างานเสร็จสมบูรณ์ สำหรับอัปเดตรายละเอียดงาน มีสถิติเพื่อนับจำนวนงานทั้งหมดที่มีในระบบ
- Part 2: การสืบทอดและ polymorphism
สร้างคลาส PriorityTask ที่สืบทอดจากคลาส Task โดยเพิ่มคุณสมบัติสำหรับกำหนดระดับความสำคัญของงาน
เขียนเมธอดใหม่สำหรับคลาสนี้ที่จะแสดงข้อความเมื่อทำเครื่องหมายว่างานเสร็จ
- Part 3: การใช้ Interface
สร้าง interface ที่ชื่อว่า TeamMember เพื่อกำหนดข้อมูลของสมาชิกในทีม
สร้างฟังก์ชันเพื่อให้สมาชิกในทีมสามารถรับมอบหมายงานได้ โดยจะเพิ่มงานในรายการของสมาชิก
- Part 4: เจนเนอริค
สร้างคลาส Queue<T> ที่สามารถเก็บข้อมูลได้หลายประเภท
มีฟังก์ชันสำหรับเพิ่มข้อมูลเข้าไปในคิว และฟังก์ชันสำหรับลบข้อมูลที่อยู่ด้านหน้าของคิว
- Part 5: ฟังก์ชันเชิงสูง
สร้างฟังก์ชันที่รับฟังก์ชันอื่นเข้ามาเป็นพารามิเตอร์และสามารถปรับปรุงข้อมูลงานได้
สร้างฟังก์ชันที่ทำให้ความสำคัญของงานเป็นระดับสูงเมื่อเรียกใช้งาน
- Part 6: การทำงานแบบอะซิงโครนัส
สร้างฟังก์ชันที่ใช้สำหรับดึงข้อมูลงานจากแหล่งข้อมูลภายนอก โดยใช้การทำงานแบบอะซิงโครนัส
มีการจัดการข้อผิดพลาดด้วยการใช้โค้ดตรวจสอบว่าเกิดข้อผิดพลาดหรือไม่
- Part 7: วิธีการในอาเรย์
ใช้ฟังก์ชันในการสร้างรายการชื่อเรื่องของงานทั้งหมด
กรองงานที่ยังไม่เสร็จออกจากรายการ
นับจำนวนงานที่ทำเสร็จแล้ว
-  Part 8: การจัดการข้อผิดพลาด
สร้างฟังก์ชันที่แปลงข้อมูล JSON  โดยมีการจัดการข้อผิดพลาดในการแปลงข้อมูล
หากเกิดข้อผิดพลาดจะมีการแสดงข้อความที่ชัดเจน
- Part 9: โมดูลและการนำเข้า/ส่งออก
สร้างไฟล์ที่เก็บฟังก์ชันสำหรับนับจำนวนงานที่ทำเสร็จในระบบ
นำเข้าฟังก์ชันนี้ในไฟล์หลักของโปรแกรมเพื่อนำมาใช้ในการคำนวณจำนวนงานที่เสร็จ
