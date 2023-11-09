import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomNav from "./components/CustomNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./components/MainPage";
import NewsDetails from "./components/NewsDetails";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Details/:newsID" element={<NewsDetails />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
}

export default App;
