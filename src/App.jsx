import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen min-h-screen h-full bg-[#FFDDD2]">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;
