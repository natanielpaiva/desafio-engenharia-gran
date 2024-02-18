// src/tasks/tasks.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from './task.status';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  // Método para obter todas as tarefas
  getTasks(): Task[] {
    return this.tasks;
  }


  // Método para adicionar uma tarefa
  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  // Método para deletar uma tarefa
  deleteTask(id: string): void {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter(task => task.id !== found.id);
  }

  // Método para atualizar o status de uma tarefa
  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  // Método para encontrar uma tarefa pelo ID
  getTaskById(id: string): Task {
    const found = this.tasks.find(task => task.id === id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }
}
