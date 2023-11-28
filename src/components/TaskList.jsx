import Task from "./Task";

function TaskList({ tasks, onDeleteTask, onChangeStatus }) {
  return (
    <table>
      <tbody>
      <tr>
        <th>Id</th>
        <th>Tarea</th>
        <th>Eliminar</th>
        <th>Estado</th>
      </tr>
        {tasks.map(t => <Task key={t.id} task={t} onDeleteTask={onDeleteTask} onChangeStatus={onChangeStatus} />)}
      </tbody>
    </table>
  );
}

export default TaskList;