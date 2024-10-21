// TeamMember.ts
import { Task } from './Task';

export interface TeamMember {
    name: string;
    role: string;
    tasks: Task[];
}

export function assignTask(member: TeamMember, task: Task): void {
    member.tasks.push(task);
}
