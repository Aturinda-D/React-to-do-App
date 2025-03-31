import React from "react";
import Task from "./Task";
import Filter from "./Filter";
import Input from "./Input";
import { FaPlus, FaSearch } from "react-icons/fa";

const Taskview = () => {
  return (
    <div className="taskview">
      <form className="inputs">
        <Input type="text" name="task-title" placeholder="type title of task" />
        <Input
          type="text"
          name="task-title"
          placeholder="detail of your task"
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
      <div className="task-container">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default Taskview;
