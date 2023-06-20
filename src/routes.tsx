import Home from "./pages/Home";

import OldCurriculum from "./pages/OldCurriculum";
import NewCurriculum from "./pages/NewCurriculum";

import OldCurriculumById from "./pages/OldCurriculumById";
import NewCurriculumById from "./pages/NewCurriculumById";

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
  {
    path: "/old-curriculum/:id",
    element: <OldCurriculumById />,
  },
  {
    path: "/new-curriculum/:id",
    element: <NewCurriculumById />,
  },
];

export default routes;
