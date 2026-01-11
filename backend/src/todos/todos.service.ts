import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class TodosService {
  private todos = [
    {
      id: randomUUID(),
      title: 'Lorem50 ipsum dolor sit amet, consectetur adipiscing elit.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: randomUUID(),
      title:
        'Test 2 Lorem50 ipsum dolor sit amet, consectetur adipiscing elit.',
      description:
        'Test description 2 ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: randomUUID(),
      title: 'Test 3 lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Test description 3',
    },
  ];

  findAll() {
    return this.todos;
  }
}
