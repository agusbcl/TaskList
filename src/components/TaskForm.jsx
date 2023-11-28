import '../App.css';

function TaskForm({ onAddTask }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const todoForm = new FormData(e.target);
      const description = todoForm.get('description');
      onAddTask(description);
      e.target.reset();
  
    };
    return (
      <form className='addTaskForm' onSubmit={handleSubmit}>
        <label htmlFor="description">Nueva tarea: </label>
        <input type="text" name="description" id="description" 
        placeholder="Agregue una descripción de la tarea que desea agregar" required />
        <button type="submit" value="Agregar">Agregar</button>
      </form>
    );
  }
  
  export default TaskForm;