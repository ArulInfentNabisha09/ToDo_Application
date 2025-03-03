package com.todo.service;

import com.todo.model.Task;
import com.todo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getAllTasks() { return taskRepository.findAll(); }

    public Optional<Task> getTaskById(Long id) { return taskRepository.findById(id); }

    public Task createTask(Task task) { return taskRepository.save(task); }

    public Task updateTask(Long id, Task newTask) {
        return taskRepository.findById(id).map(task -> {
            task.setEmployeeName(newTask.getEmployeeName());
            task.setTask(newTask.getTask());
            task.setStatus(newTask.getStatus());
            return taskRepository.save(task);
        }).orElse(null);
    }

    public void deleteTask(Long id) { taskRepository.deleteById(id); }
}
