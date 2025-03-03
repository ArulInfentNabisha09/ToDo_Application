import { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editTask }) => {
  const [task, setTask] = useState({ employeeName: "", task: "", status: "" });

  useEffect(() => {
    if (editTask) setTask(editTask);
  }, [editTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ employeeName: "", task: "", status: "" });
  };

  return (
    <div className="card p-3 shadow">
      <h5>{editTask ? "Edit Task" : "Add Task"}</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="employeeName" className="form-control" placeholder="Employee Name" value={task.employeeName} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" name="task" className="form-control" placeholder="Task" value={task.task} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" name="status" className="form-control" placeholder="Status" value={task.status} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">{editTask ? "Update" : "Add"} Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
