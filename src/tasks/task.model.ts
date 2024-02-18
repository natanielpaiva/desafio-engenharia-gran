// src/tasks/task.model.ts

import { TaskStatus } from "./task.status";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
  }
  
