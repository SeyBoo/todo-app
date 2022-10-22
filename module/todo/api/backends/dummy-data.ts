import { Todo } from '../../../../common/types/todo.interface';

export const dummyData: Todo[] = [
	{
		content: 'Implement a simple backend',
		completed: false,
		uuid: 'uuid-0',
	},
	{
		content: 'Finish portfolio',
		completed: false,
		uuid: 'uuid-1',
	},
	{
		content: 'Complete todo-app',
		completed: true,
		uuid: 'uuid-3',
	},
];
