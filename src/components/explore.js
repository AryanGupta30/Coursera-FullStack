import React from 'react';
import '../css/explore.css';
import {courses} from '../constants/data'

function App() {
  return (
    <div className="app">
      <h1 style={{margin: '60px', fontSize: '2.7rem'}}>Explore Coursera</h1>
      <div className="courses">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h2>{course.category}</h2>
            <p>{course.count}courses</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
