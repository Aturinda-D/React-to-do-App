import React from "react";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";
import TaskAction from "./TaskAction";
import { RiDeleteBin6Line } from "react-icons/ri";

const Task = () => {
  return (
    <div className="task">
      <div className="task-info">
        <h4>learn javascript</h4>
        <p>Master the language powering the modern web.</p>
        <h5>
          Start date: <span>07-07-2023</span>
        </h5>
      </div>
      <div className="actions">
        <TaskAction icon={<FaRegCheckCircle />} />
        <TaskAction icon={<FaEdit />} />
        <TaskAction icon={<RiDeleteBin6Line />} />
      </div>
    </div>
  );
};

export default Task;
