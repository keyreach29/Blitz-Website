import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ApplySchool() {
  const [schoolName, setSchoolName] = useState('');
  const [courseApplied, setCourseApplied] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus(null);
    try {
      const response = await fetch('http://localhost:8000/apply_school', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          schoolapplied: schoolName,
          courseapplied: courseApplied,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Server Response:', data);
      setSubmissionStatus('success');
      // Reset form fields after successful submission
      setSchoolName('');
      setCourseApplied('');

    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('error');
    }
  };

  return (
    <section id="schoolApplications" className="container mt-5">
      <h2>Apply to Schools</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="schoolName" className="form-label">
            School Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="schoolName"
            name="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="courseApplied" className="form-label">
            Course Applied For:
          </label>
          <input
            type="text"
            className="form-control"
            id="courseApplied"
            name="courseApplied"
            value={courseApplied}
            onChange={(e) => setCourseApplied(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </div>

        {submissionStatus === 'success' && (
          <div className="col-12 mt-3 text-success">
            Application submitted successfully!
          </div>
        )}

        {submissionStatus === 'error' && (
          <div className="col-12 mt-3 text-danger">
            Application failed. Please try again.
          </div>
        )}
      </form>
    </section>
  );
}

export default ApplySchool;