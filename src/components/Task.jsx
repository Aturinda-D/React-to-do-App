import React from "react";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";
import TaskAction from "./TaskAction";
import { RiDeleteBin6Line } from "react-icons/ri";

const Task = ({ ...props }) => {
  return (
    <div className="task">
      <div className="task-info">
        <h4>{props.title}</h4>
        <p>{props.body}</p>
        <h5>
          Start date: <span>{props.date}</span>
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
