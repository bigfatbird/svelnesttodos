import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  // GET /todos
  @Get()
  findAll() {
    return [];
  }
  // GET /todos/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  // POST /todos
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return {
      title: createTodoDto.title,
      description: createTodoDto.description,
    };
  }
  // PUT /todos/:id
  // DELETE /todos/:id
}
