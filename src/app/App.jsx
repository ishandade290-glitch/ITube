import { RouterProvider } from "react-router";
import MainPage from "../pages/main-page";
import "./App.css";
import { router } from "../features/routers/rout";

const App = () => {
  return (
    <>
    <RouterProvider router = {router}/>
    
    </>)
};

export default App;
