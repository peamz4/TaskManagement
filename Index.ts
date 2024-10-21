// index.ts
import { Task } from './Task';
import { PriorityTask } from './PriorityTask';
import { assignTask, TeamMember } from './TeamMember';
import { Queue } from './Queue';
import { calculateTotalCompletedTasks } from './taskUtils';

async function fetchTasks(): Promise<Task[]> {
    try {
        const response = await new Promise<Task[]>((resolve) => {
            setTimeout(() => {
                resolve([
                    new Task("Task 1", "Description 1"),
                    new Task("Task 2", "Description 2"),
                ]);
            }, 1000);
        });
        return response;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
}

// Higher-Order Function
function createTaskUpdater(updateFn: (task: Task) => void) {
    return (task: Task) => {
        updateFn(task);
    };
}

const markAsUrgent = createTaskUpdater((task: Task) => {
    if (task instanceof PriorityTask) {
        task.priority = 'high';
    }
});

// Test the implementation
(async () => {
    const tasks = await fetchTasks();
    const member: TeamMember = { name: 'Alice', role: 'Developer', tasks: [] };

    // Create a queue to manage tasks
    const taskQueue = new Queue<Task>();

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
    console.log(`Total completed tasks: ${calculateTotalCompletedTasks(member.tasks)}`);

    // Show total tasks and their priorities
    console.log(`Total Tasks Assigned to ${member.name}: ${member.tasks.length}`);
    console.log("Tasks and their priorities:");
    member.tasks.forEach(task => {
        const priority = task instanceof PriorityTask ? task.priority : 'normal'; // Assuming normal for non-priority tasks
        console.log(`- ${task.title}: ${priority}`);
    });
})();
