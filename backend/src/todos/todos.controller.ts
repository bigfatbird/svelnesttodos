import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  // GET /todos
  @Get()
  findAll() {
    return this.todosService.findAll();
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
  @Put('id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return { id, ...updateTodoDto };
  }

  // DELETE /todos/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return { id };
  }
}
