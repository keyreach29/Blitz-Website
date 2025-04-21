import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplySchool from './ApplySchool';
import TrainingForm from './TrainingForm';
import Header from './Header';
import ContactUs from './ContactUs';
import MovingImages from './MovingImages';
import Footer from './Footer';

function CombinedPage() {
  return (
    <div className="container-fluid" style={{ position: 'relative' }}>
      <Header />
      <div style={{ position: 'relative', zIndex: -1 }}>
        <MovingImages style={{ width: '100%', height: '100vh' }} />
      </div>
      <main className="container mt-4" style={{ position: 'relative', zIndex: 0 }}>
        <TrainingForm />
        <ApplySchool />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default CombinedPage;