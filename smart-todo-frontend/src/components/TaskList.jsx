import React from "react";
import { deleteTask } from "../api";

const TaskList = ({ tasks, fetchTasks, onEdit }) => {
  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks(); // Auto-refresh after deleting
  };

  return (
    <div className="mt-4">
      <h3 className="text-center">Employee Task List</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-sm mt-2">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Task</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.employeeName}</td>
                <td>{task.task}</td>
                <td>{task.status}</td>
                <td className="d-flex gap-2">
                  <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(task)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
