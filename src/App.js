import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/style.scss";
import Layout from "./components/Layout";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import QuestionFour from "./pages/QuestionFour";
import QuestionFive from "./pages/QuestionFive";
import Page404 from "./pages/Page404";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<QuestionOne />}></Route>
          <Route path="/q2" element={<QuestionTwo />}></Route>
          <Route path="/q4" element={<QuestionFour />}></Route>
          <Route path="/q5" element={<QuestionFive />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
