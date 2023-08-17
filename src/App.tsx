import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Header from "./components/Header";
import PageLayout from "./Layouts/PageLayout";

// import 'App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/sobre" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App
