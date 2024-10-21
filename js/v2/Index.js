// index.ts
import { Task } from '../../Task.js';
import { PriorityTask } from '../../PriorityTask.js';
import { assignTask } from '../../TeamMember.js';
import { Queue } from '../../Queue.js';
import { calculateTotalCompletedTasks } from '../../taskUtils.js';
async function fetchTasks() {
    try {
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    new Task("Task 1", "Description 1"),
                    new Task("Task 2", "Description 2"),
                ]);
            }, 1000);
        });
        return response;
    }
    catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
}
// Higher-Order Function
function createTaskUpdater(updateFn) {
    return (task) => {
        updateFn(task);
    };
}
const markAsUrgent = createTaskUpdater((task) => {
    if (task instanceof PriorityTask) {
        task.priority = 'high';
    }
});
// Test the implementation
(async () => {
    const tasks = await fetchTasks();
    const member = { name: 'Alice', role: 'Developer', tasks: [] };
    // Create a queue to manage tasks
    const taskQueue = new Queue();
    // Enqueue fetched tasks
    tasks.forEach(task => taskQueue.enqueue(task));
    // Dequeue and assign tasks to the team member
    while (taskQueue.size() > 0) {
        const task = taskQueue.dequeue();
        if (task) {
            assignTask(member, task);
        }
    }
    const priorityTask = new PriorityTask("Urgent Task", "Complete ASAP", 'high');
    assignTask(member, priorityTask);
    // Marking tasks as completed
    tasks[0].markCompleted();
    priorityTask.markCompleted();
    // Count completed tasks
    const totalCompleted = calculateTotalCompletedTasks(member.tasks);
    const totalTasks = member.tasks.length;
    // Show task details
    console.log(`Total Tasks Assigned to ${member.name}: ${totalTasks}`);
    console.log(`Total Completed Tasks: ${totalCompleted}`);
    console.log("Tasks and their details:");
    member.tasks.forEach(task => {
        const status = task.completed ? "Completed" : "Pending"; // Assuming there's a completed property
        const priority = task instanceof PriorityTask ? task.priority : 'normal'; // Assuming normal for non-priority tasks
        console.log(`- Title: ${task.title}`);
        console.log(`  Status: ${status}`);
        console.log(`  Description: ${task.description}`);
        console.log(`  Priority: ${priority}`);
    });
})();
