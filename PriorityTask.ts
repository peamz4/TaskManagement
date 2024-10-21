import { Task } from './Task';

export class PriorityTask extends Task {
    priority: 'low' | 'medium' | 'high';

    constructor(title: string, description: string, priority: 'low' | 'medium' | 'high') {
        super(title, description);
        this.priority = priority;
    }

    markCompleted(): void {
        super.markCompleted();
        console.log(`Priority task "${this.title}" completed.`);
    }
}
