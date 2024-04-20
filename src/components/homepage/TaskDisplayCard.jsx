import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteTodoTask, handleCompleteTask } from "../../redux/todoSlice";
import toast from "react-hot-toast";

const TaskDisplayCard = ({ item }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    const data = { id: item.id };
    dispatch(deleteTodoTask(data));
    toast.success("Task Removed");
  };
  const handleComplete = ({ item }) => {
    dispatch(handleCompleteTask({ item }));
  };

  return (
    <div className="bg-[#006D77] w-5/12 mx-auto p-7 flex flex-col gap-y-5 border-2 border-cyan-300 rounded-md shadow-xl">
      <div className="text-lg text-[#FFDDD2] font-bold">{item.title}</div>
      <div className="flex justify-between text-[#FFDDD2] font-bold">
        <div className="flex justify-center items-center">
          <div className="text-sm mr-4">Due Date : </div>
          <div>{item.date}</div>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex gap-2 text-sm text-[#FFDDD2]">
          <button onClick={() => handleComplete({ item })} className="text-xl">
            {item.isComplete ? (
              <IoIosCheckmarkCircle />
            ) : (
              <IoIosCheckmarkCircleOutline />
            )}
          </button>
          {item.isComplete ? <p>completed</p> : <p>Mark as completed</p>}
        </div>
        <button
          onClick={deleteHandler}
          className="text-2xl text-[#FFDDD2] font-bold"
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default TaskDisplayCard;
