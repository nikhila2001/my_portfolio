import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Education from "./pages/Education";
import Footer from "./components/Footer";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/contact" element={<ContactForm />}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
