import { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  //función para agregar una nueva tarea, recibe la descripción que viene
  //del evento que se dispara cuando le damos "Crear" en el componente Input
  const handleAddTask = (description) => {
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
  };

  useEffect(()=>{
    if(tasks.length) window.localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  //función para borrar una tarea habiendo recibido el id
  const handleDelete = (id) => {
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks([...remainingTasks]);
  };

  //funcion que modifica el estado de una tarea
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
    <>
      <h1>Lista de Tareas</h1>
      <SearchBar onSearch={query => handleSearchQuery(query)} />
      <p>Query: {searchQuery}</p>
      <Input onAddTask={(description) => handleAddTask(description)} />
      <TaskList onDeleteTask={(id) => handleDelete(id)} tasks={filteredTasks}
        onChangeStatus={(id) => handleChangeStatus(id)}
      />
    </>
  );

};

export default App;




