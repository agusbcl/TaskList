import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function TaskList({ tasks, onDeleteTask, onChangeStatus }) {
const msg = (text) => alert(text);
  return (
    <div>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.id.slice(0, 5)} - {t.description} - {t.
        isCompleted ? "terminado" : "pendiente"} <MdDelete 
        onClick={() => onDeleteTask(t.id)} />
        <FaCheckCircle onClick={()=>onChangeStatus(t.id)} />
        </li>)}      </ul>
    </div>
  );
}

export default TaskList;