package com.todo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")
@SequenceGenerator(name = "task_seq", sequenceName = "task_sequence", allocationSize = 1)
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "task_seq")
    private Long id;

    @Column(name = "employee_name", length = 255)
    private String employeeName;

    @Column(name = "task", length = 255)
    private String task;

    @Column(name = "status", length = 255)
    private String status;

    public Task() {}

    public Task(String employeeName, String task, String status) {
        this.employeeName = employeeName;
        this.task = task;
        this.status = status;
    }

    public Long getId() { return id; }
    public String getEmployeeName() { return employeeName; }
    public void setEmployeeName(String employeeName) { this.employeeName = employeeName; }
    
    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
