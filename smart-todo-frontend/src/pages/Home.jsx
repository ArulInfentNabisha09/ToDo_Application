import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { createTask, updateTask, getTasks } from "../api";

const Home = () => {
  const [editTask, setEditTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleCreateOrUpdateTask = async (task) => {
    if (task.id) {
      await updateTask(task.id, task);
    } else {
      await createTask(task);
    }
    fetchTasks(); // Refresh the list after adding/updating
    setEditTask(null);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Smart To-Do List</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <TaskForm onSubmit={handleCreateOrUpdateTask} editTask={editTask} />
        </div>
      </div>
      <TaskList tasks={tasks} fetchTasks={fetchTasks} onEdit={setEditTask} />
    </div>
  );
};

export default Home;
