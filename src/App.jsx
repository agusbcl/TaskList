import { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import TaskForm from './components/TaskForm';

function getLocalStorageTasks() {
  const storedTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks : [];
}

function App() {
  const [tasks, setTasks] = useState(getLocalStorageTasks());
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
  };

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const handleDelete = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks([...remainingTasks]);
  };

  const handleChangeStatus = (id) => {
    const updatedTasks = tasks.map(t => t.id === id ?
      { ...t, isCompleted: !t.isCompleted }
      :
      t
    );
    setTasks([...updatedTasks]);
    setFilteredTasks([...updatedTasks]);
  };

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
    const queryResult = tasks.filter(task => task.description.toLocaleLowerCase().
      includes(query.toLocaleLowerCase()));
    setFilteredTasks(queryResult);
  };

  return (
    <main className='container'>
      <h1>Lista de Tareas</h1>
      <SearchBar onSearch={query => handleSearchQuery(query)} />

      <TaskForm onAddTask={(description) => handleAddTask(description)} />
      {tasks &&
        <TaskList onDeleteTask={(id) => handleDelete(id)} tasks={filteredTasks}
          onChangeStatus={(id) => handleChangeStatus(id)}
        />
      }
    </main>
  );
};

export default App;