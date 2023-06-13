import Home from "./pages/Home";
import OldCurriculum from "./pages/OldCurriculum";
import NewCurriculum from "./pages/NewCurriculum";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/old-curriculum",
    element: <OldCurriculum />,
  },
  {
    path: "/new-curriculum",
    element: <NewCurriculum />,
  },
];

export default routes;
