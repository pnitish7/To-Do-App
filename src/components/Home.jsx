import React from "react";
import TaskDisplayCard from "./homepage/TaskDisplayCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const { tasks } = useSelector((state) => state.todoTask);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("task", JSON.stringify(tasks));
    }
  }, [tasks]);

  return (
    <div className="flex flex-col gap-6 items-center mx-auto justify-center w-8/12 mt-10  ">
      <div className="flex flex-col gap-3">
        <p className="text-3xl font-bold text-cyan-800 ">All Tasks ...</p>
        <div className="w-38 h-1 bg-cyan-800"></div>
      </div>
      {tasks &&
        tasks.map((item, index) => {
          return <TaskDisplayCard key={index} item={item} />;
        })}
    </div>
  );
};

export default Home;
