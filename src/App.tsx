import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import ProjectPage from "@/pages/project";
import Layout from "./Layout";
import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
