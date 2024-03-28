import React, { useState } from 'react'
import '../App.css';

const JobForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    jobMode: '',
    startDate: '',
    salary: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };
const design={
  display: 'block'
};
  const displayData = () => {
    
    
  }
  return (
    <div className='wrapper'>
      <div className='left form-s'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="jobTitle">Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="jobMode">Job Mode:</label>
            <select
              type="text"
              id="jobMode"
              name="jobMode"
              value={formData.jobMode}
              onChange={handleChange}
            >
              <option>Remote</option>
              <option>On-site</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div>
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="salary">Salary:</label>
            <input
              type="text"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className='Submitbtn' onClick={displayData}>Submit</button>
        </form>
      </div>
      <div className='right display'>
          <p>Company Name : {formData.companyName}</p>
          <p>Job Title : {formData.jobTitle}</p>
          <p>Job Mode : {formData.jobMode}</p>
          <p>Salary : {formData.salary}</p>  
          <p>Location : {formData.location}</p>
      </div>
    </div> 
  );
};
export default JobForm;

