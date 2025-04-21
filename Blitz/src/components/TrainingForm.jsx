import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const TrainingForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseType: 'online',
  });

  const handleEnrollClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTrainingFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/enroll', formData);
      console.log('Server response:', response.data);
      alert(response.data.message);
      setShowForm(false);
      setFormData({ name: '', email: '', phone: '', courseType: 'online' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="text-center">
            <h2>IELTS Training</h2>
            <p>Sign up for personalized IELTS preparation courses!</p>
            <button
              id="enrollBtn"
              onClick={handleEnrollClick}
              className="btn btn-primary">
              Enroll Now
            </button>
          </div>

          {showForm && (
            <div id="trainingForm" className="mt-4">
              <form onSubmit={handleTrainingFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-control"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-control"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-control"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="courseType" className="form-label">
                    Course Type:
                  </label>
                  <select
                    name="courseType"
                    id="courseType"
                    value={formData.courseType}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="online">Online</option>
                    <option value="inPerson">In-person</option>
                  </select>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingForm;