import React from 'react';
import '../css/explore.css';

const courses = [
  { category: 'Data Science', count: 425 },
  { category: 'Business', count: 1095 },
  { category: 'Computer Science', count: 668 },
  { category: 'Health', count: 471 },
  { category: 'Social Sciences', count: 401 },
  { category: 'Personal Development', count: 137 },
  { category: 'Arts and Humanities', count: 338 },
  { category: 'Physics Science and Engineering', count: 413 },
  { category: 'Language Learning', count: 150 },
  { category: 'Infromation Technology', count: 145 },
  { category: 'Math and Logic', count: 70 }
];

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
