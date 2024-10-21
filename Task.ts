// Task.ts
export class Task {
  static totalTasksCount = 0; // ตัวแปรสถิติจำนวนงานทั้งหมด
  title: string;
  description: string;
  completed: boolean;

  constructor(title: string, description: string) {
      this.title = title;
      this.description = description;
      this.completed = false;
      Task.totalTasksCount++; // เพิ่มจำนวนงานเมื่อสร้างงานใหม่
  }

  markCompleted(): void {
      this.completed = true;
      console.log(`Task "${this.title}" completed.`);
  }

  updateDescription(newDescription: string): void {
      this.description = newDescription;
  }

  static totalTasks(): number {
      return Task.totalTasksCount; // คืนค่าจำนวนงานทั้งหมด
  }
}
