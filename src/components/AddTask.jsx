import React from "react";
import { useState } from "react";
import { addTodoTask } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTitle = (e) => {
    e.preventDefault();
    setTaskTitle(e.target.value);
  };

  const handleDate = (e) => {
    e.preventDefault();
    setTaskDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: taskTitle,
      date: taskDate,
      isComplete: false,
      id: Date.now(),
    };
    if (!data.date || !data.title) {
      toast.error("Data Missing");
    } else {
      dispatch(addTodoTask(data));
      toast.success("New Task Added");
      navigate("/");
    }
  };

  return (
    <div className="w-8/12 mx-auto mt-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-5/6 items-center mx-auto"
      >
        <input
          className="w-full h-8 border-2 rounded-xl border-cyan-300 outline-none"
          type="text"
          placeholder="Enter task here ..."
          value={taskTitle}
          onChange={handleTitle}
        />
        <input
          className="w-full h-8 border-2 rounded-xl border-cyan-300 outline-none"
          type="date"
          value={taskDate}
          onChange={handleDate}
        />
        <div className="flex gap-8">
          <Link
            to={"/"}
            className="px-3 py-1 hover:ring-4 transition-all duration-300 hover:ring-cyan-200 bg-cyan-900 text-[#FFDDD2] rounded-md text-lg font-bold"
          >
            Back
          </Link>
          <button className="px-3 py-1 hover:ring-4 transition-all duration-300 hover:ring-cyan-200 bg-cyan-900 text-[#FFDDD2] rounded-md text-lg font-bold">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
