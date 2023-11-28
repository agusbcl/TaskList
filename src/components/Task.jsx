import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import '../App.css';

function Task({ task, onDeleteTask, onChangeStatus }) {
  return (
    <tr
      className={task.isCompleted ? "completed" : null}
    >
      <td>
        <span>
        {task.id.slice(0, 2)}
        </span>
      </td>
      <td>
        <span>
        {task.description}
        </span>
      </td>
      <td>
        <MdDelete className="icon" size={19} onClick={() => onDeleteTask(task.id)} />
      </td>
      <td>
        <FaCheckCircle className="icon" size={15} onClick={() => onChangeStatus(task.id)} />
      </td>
    </tr>
    )
}

export default Task;