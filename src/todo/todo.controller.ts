import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.todoService.findOne(id);
  }

  @Post()
  async create(@Body() createTodo: CreateTodoDto) {
    return await this.todoService.create(createTodo);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodo: CreateTodoDto) {
    return await this.todoService.update(id, updateTodo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.todoService.delete(id);
  }
}
