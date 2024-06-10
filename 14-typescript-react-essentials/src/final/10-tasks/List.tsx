import { type Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({ id }: { id: string }) => void;
};

function List({ tasks, toggleTask }: ListProps) {
  return (
    <ul className='list'>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p className='task-text'>{task.description}</p>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => {
                toggleTask({ id: task.id });
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default List;
