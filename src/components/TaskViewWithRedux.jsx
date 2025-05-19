import { useEffect, useState } from "react";
import Task from "./Task";
import Filter from "./Filter";
import Input from "./Input";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Taskview = ({
  createdTasks,
  setCreatedTasks,
  setPendingTasks,
  setCompletedTasks,
  ...props
}) => {
  const date = new Date();
  const [searchValue, setSearchValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskBody, setTaskBody] = useState("");
  const tasks = useSelector((state) => state.taskStore.tasks); // "tasks" is the same name used for the reducer of interest in the store
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const taskDispatch = useDispatch();

  const handleOnChangeTaskTitle = (e) => setTaskTitle(e.target.value);
  const handleOnChangeTaskBody = (e) => setTaskBody(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(
        tasks.filter((task) =>
          task.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  const handleMarkCompleted = (id) => {
    taskDispatch({ type: "task/toggleStatus", payload: id });
  };

  const handleEdit = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setTaskTitle(task.title);
      setTaskBody(task.body);
      setIsEdit(true);
      setEditId(id);
    }
  };
  const editTask = (e) => {
    e.preventDefault();
    taskDispatch({
      type: "task/edit",
      payload: {
        id: editId,
        updates: {
          title: taskTitle,
          body: taskBody,
          status: "pending", // Reset status on edit
        },
      },
    });
    setIsEdit(false);
    setTaskTitle("");
    setTaskBody("");
  };

  const handleDelete = (id) => {
    taskDispatch({ type: "task/delete", payload: id });
  };

  const addTask = (e) => {
    e.preventDefault();
    taskDispatch({
      type: "task/add",
      payload: {
        id: Math.round(Math.random() * 1000),
        title: taskTitle,
        body: taskBody,
        status: "pending",
        date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
      },
    });
    setTaskTitle("");
    setTaskBody("");
    setCreatedTasks(createdTasks + 1);
  };

  useEffect(() => {
    setPendingTasks(tasks.filter((task) => task.status === "pending").length);
    setCompletedTasks(
      tasks.filter((task) => task.status === "completed").length
    );
    setFilteredTasks(tasks);
  }, [tasks]);

  return (
    <div className="taskview">
      <form className="inputs" onSubmit={isEdit ? editTask : addTask}>
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
        <form onSubmit={handleSearch}>
          <Input
            type="search"
            name="search-bar"
            value={searchValue}
            placeholder="Search by name"
            id="search"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button type="submit" id="search-button">
            <FaSearch />
          </button>
        </form>
      </div>
      <div ref={props.taskContainerRef} className="task-container">
        {filteredTasks?.map((task) => (
          <Task
            key={task?.id}
            title={task?.title}
            body={task?.body}
            status={task?.status}
            date={task?.date}
            onClickCheck={() => handleMarkCompleted(task?.id)}
            onClickEdit={() => handleEdit(task?.id)}
            onClickDelete={() => handleDelete(task?.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Taskview;
