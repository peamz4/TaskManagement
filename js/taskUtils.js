export function calculateTotalCompletedTasks(tasks) {
    return tasks.filter(task => task.completed).length;
}
