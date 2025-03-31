import React, { useEffect, useRef, useState } from "react";
import Task from "./Task";
import Filter from "./Filter";
import Input from "./Input";
import { FaPlus, FaSearch } from "react-icons/fa";

const Taskview = ({ ...props }) => {
  const date = new Date();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskBody, setTaskBody] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: Math.round(Math.random() * 1000),
      title: "Get started",
      body: "Add your first task!",
      status: "pending",
      date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
    },
  ]);
  const handleOnChangeTaskTitle = (e) => setTaskTitle(e.target.value);
  const handleOnChangeTaskBody = (e) => setTaskBody(e.target.value);
  const handleMarkCompleted = (id) => {
    setTasks(() =>
      tasks.map((task, index) => {
        if (task.id === id) {
          task.status = "completed";
          tasks.splice(index, 1, task);
          return task;
        }
      })
    );
  };
  const addTask = (e) => {
    e.preventDefault();
    setTasks((prevState) => [
      ...prevState,
      {
        id: Math.round(Math.random() * 1000),
        title: taskTitle,
        body: taskBody,
        status: "pending",
        date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      },
    ]);
    setTaskTitle("");
    setTaskBody("");
  };
  return (
    <div className="taskview">
      <form className="inputs" onSubmit={addTask}>
        <Input
          type="text"
          name="task-title"
          value={taskTitle}
          placeholder="type title of task"
          onChange={handleOnChangeTaskTitle}
          required
        />
        <Input
          type="text"
          name="task-body"
          value={taskBody}
          placeholder="detail of your task"
          onChange={handleOnChangeTaskBody}
          required
        />
        <button type="submit" id="add-task">
          <FaPlus />
        </button>
      </form>
      <div className="filter-search">
        <div className="filters">
          <Filter label="By category" />
          <Filter label="By priority" />
        </div>
        <form>
          <Input
            type="search"
            name="search-bar"
            placeholder="Search by name"
            id="search"
          />
          <button type="submit" id="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
      <div ref={props.taskContainerRef} className="task-container">
        {tasks?.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            body={task.body}
            status={task.status}
            date={task.date}
            onClickCheck={() => handleMarkCompleted(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Taskview;
