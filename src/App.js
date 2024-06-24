import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
