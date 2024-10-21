import { Task } from './Task';

export function calculateTotalCompletedTasks(tasks: Task[]): number {
    return tasks.filter(task => task.completed).length;
}
