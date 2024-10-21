// PriorityTask.ts
import { Task } from './Task.js';
export class PriorityTask extends Task {
    priority;
    constructor(title, description, priority) {
        super(title, description);
        this.priority = priority;
    }
    markCompleted() {
        super.markCompleted();
        console.log(`Priority task "${this.title}" completed.`);
    }
}
