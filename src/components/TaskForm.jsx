import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  }

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return {
          ...prev,
          tags: filterTags};
      });
    } else {
      setTaskData(prev => {
        return { ...prev, tags: [...prev.tags, tag]}
      })
    }
  };
  console.log(taskData.tags);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) =>  ({
      ...prev,
      [name]: value, // Update task or status correctly
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
     setTasks((prev) => [...prev, taskData]); 
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  }
  
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          placeholder="Add a task"
          className="task_input"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
            <Tag
              tagName="NextJs"
              selectTag={selectTag}
              selected={checkTag("NextJs")}
            />
            <Tag
              tagName="React Native"
              selectTag={selectTag}
              selected={checkTag("React Native")}
            />
          </div>
          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="inprogress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
