import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.contactName.trim()) {
      errors.contactName = 'Full Name is required';
    }
    if (!formData.contactEmail.trim()) {
      errors.contactEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) {
      errors.contactEmail = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    try {
      // Replace with your API endpoint
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionSuccess(true);
        setFormData({ contactName: '', contactEmail: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmissionError(errorData.message || 'An error occurred.');
      }
    } catch (error) {
      setSubmissionError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container mt-5">
      <h2 className="mb-4">Contact Us</h2>
      {submissionSuccess && (
        <div className="alert alert-success" role="alert">
          Thank you for your message!
        </div>
      )}
      {submissionError && (
        <div className="alert alert-danger" role="alert">
          {submissionError}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="contactName" className="form-label">
            Full Name:
          </label>
          <input
            type="text"
            className={`form-control ${formErrors.contactName ? 'is-invalid' : ''}`}
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
          />
          {formErrors.contactName && (
            <div className="invalid-feedback">{formErrors.contactName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="contactEmail" className="form-label">
            Email Address:
          </label>
          <input
            type="email"
            className={`form-control ${formErrors.contactEmail ? 'is-invalid' : ''}`}
            id="contactEmail"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
          />
          {formErrors.contactEmail && (
            <div className="invalid-feedback">{formErrors.contactEmail}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {formErrors.message && (
            <div className="invalid-feedback">{formErrors.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}

export default ContactUs;