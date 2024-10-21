// index.ts
import { Task } from './Task.js';
import { PriorityTask } from './PriorityTask.js';
import { assignTask } from './TeamMember.js';
import { calculateTotalCompletedTasks } from './taskUtils.js';

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
    } catch (error) {
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

    // Assign tasks to member
    tasks.forEach(task => {
        assignTask(member, task);
    });

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
