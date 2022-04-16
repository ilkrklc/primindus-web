import Header from "./components/header/Header";
import ImageUploader from './components/imageuploader/ImageUploader'
import LandingPage from "./components/landingPage/LandingPage";
import Footer from './components/Footer/Footer.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Interests } from "./components/form/Interests";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/form" element={<ImageUploader />} />
        </Routes>
        <Routes>
          <Route path="/interests" element={<Interests />} />
        </Routes>

        <Footer />
      </Router>

    </>
  );
}

export default App;
