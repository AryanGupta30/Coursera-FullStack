import React from 'react';
import '../css/footer.css';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram  } from "react-icons/fa6";

const categories = {
    "Popular AI Content" : [
        "Prompt Engineering for ChatGPT Course",
        "Machine Learning Specialization",
        "Data Science Professional Certificate",
        "AI For Everyone Course",
        "Generative AI with LLMs Course",
        "Supervised Machine Learning Course",
        "Deep Learning Specialization",
        "Introduction to Generative AI Course",
        "Applied AI Professional Certificate",
        "AI Product Management Specialization",
        "AI Engineering Professional Certificate",
        "All AI Courses"
    ],
    
    "Popular Programs" : [
        "Google Data Analytics Professional Certificate",
        "Google Cybersecurity Professional Certificate",
        "Google Project Management Professional Certificate",
        "Google UX Design Professional Certificate",
        "Google IT Support Professional Certificate",
        "Google Digital Marketing & Ecomm Professional Certificate",
        "Intuit Academy Bookkeeping Professional Certificate",
        "IBM Data Analyst Professional Certificate",
        "Python for Everybody Specialization",
        "Meta Front-End Developer Professional Certificate",
        "UI / UX Design Specialization",
        "Google IT Automation with Python Professional Certificate"
    ],
    
    "Popular Skills" : [
        "Cybersecurity Courses",
        "Digital Marketing Courses",
        "Project Management Courses",
        "Python Courses",
        "Excel Courses",
        "Data Analytics Courses",
        "Google Courses",
        "Power BI Courses",
        "SQL Courses",
        "Data Science Courses",
        "Product Management Courses",
        "All Courses"
    ],

  "Popular Career Resources" : [
    "Popular Cybersecurity Certifications",
    "Popular Data Analytics Certifications",
    "Popular IT Certifications",
    "Popular SQL Certifications",
    "Popular PMI Certifications",
    "Popular Machine Learning Certifications",
    "How to Get a PMP Certification",
    "High-Income Skills Worth Learning",
    "Cybersecurity Career Paths",
    "How to Become a Data Analyst",
    "What Does a Data Analyst Do",
    "Career Resource Hub"
]

};

function footer() {
  return (
    <>
        <div className="App">
            {Object.entries(categories).map(([category, items]) => (
                <div className="category" key={category}>
                <h2 style={{fontSize: '1.3rem'}}>{category}</h2>
                <ul style={{fontSize: '0.9rem'}}>
                    {items.map(item => (
                    <li key={item} style={{paddingBottom: '10px'}}>{item}</li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
        <div className="App2">
            <footer>
                <hr />
                    <div className="footer-content">
                        <p>© 2024 Coursera Inc. All rights reserved.</p>
                        <div className='social-icons'>
                            <div className="ic">
                                <FaFacebook />
                            </div>
                            <div className="ic">
                                <FaLinkedin />
                            </div>
                            <div className="ic">
                                <FaTwitter />
                            </div>
                            <div className="ic">
                                <FaYoutube />
                            </div>
                            <div className="ic">
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
            </footer>
        </div>
    </>
  );
}

export default footer;
