import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TrainingForm from './components/TrainingForm';
import ApplySchool from './components/ApplySchool';
import ContactUs from './components/ContactUs';
import CombinedPage from './components/CombinedPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovingImages from './components/MovingImages';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CombinedPage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/training-form" element={<TrainingForm />} />
          <Route path="/apply-school" element={<ApplySchool />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/moving-images" element={<MovingImages />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;