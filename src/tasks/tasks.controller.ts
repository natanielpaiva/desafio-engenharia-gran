import { Controller, Delete, Param, Patch, Body, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { TaskStatus } from './task.status';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  createTask(@Body('title') title: string, @Body('description') description: string) {
    return this.tasksService.createTask(title, description);
  }

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }


  // Endpoint para deletar uma tarefa
  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }

  // Endpoint para atualizar o status de uma tarefa
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

}
