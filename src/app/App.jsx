import { RouterProvider } from "react-router";
import MainPage from "../pages/main-page";
import "./App.css";
import { router } from "../features/routers/rout";

const App = () => {
  return (
    <>
    <div className="bg-gray-950">
    <RouterProvider router = {router}/>
    </div>
    
    </>)
};

export default App;
