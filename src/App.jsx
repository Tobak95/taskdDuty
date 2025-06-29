import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { Suspense, lazy } from "react";

const CoverPage = lazy(() => import("../pages/CoverPage"));
const MyTask = lazy(() => import("../pages/MyTask"));
const NewTask = lazy(() => import("../pages/NewTask"));
const EditTask = lazy(() => import("../pages/EditTask"));

function App() {
  return (
    <Router>
      <Suspense fallback={<PuffLoader />}>
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/my-task" element={<MyTask />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/edit-task" element={<EditTask />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
