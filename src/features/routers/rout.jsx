import { createBrowserRouter } from "react-router";
import MainPage from "../../pages/main-page";
import WatchPage from "../../pages/watch-page/WatchPage"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/watch",
    Component: WatchPage,
  },
]);
