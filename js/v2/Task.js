export class Task {
    static totalTasksCount = 0; // ตัวแปรสถิติจำนวนงานทั้งหมด
    title;
    description;
    completed;
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
        Task.totalTasksCount++; // เพิ่มจำนวนงานเมื่อสร้างงานใหม่
    }
    markCompleted() {
        this.completed = true;
        console.log(`Task "${this.title}" completed.`);
    }
    updateDescription(newDescription) {
        this.description = newDescription;
    }
    static totalTasks() {
        return Task.totalTasksCount; // คืนค่าจำนวนงานทั้งหมด
    }
}
