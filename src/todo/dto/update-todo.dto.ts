import { Todo } from './base-todo.dto';

export class UpdateTodoDto extends Todo {
  completedAt: Date;
}
