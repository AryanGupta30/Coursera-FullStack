import React, { useState } from 'react';
import Getpage from './getPage';
import Pagecontent from './PageContent';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 4;
  const totalPages = 3; 
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const programs = [
    {
        id:'1',
        university: 'University of Illinois at Urbana-Champaign',
        degree: 'Master of Business Administration (IMBA)',
        img : require('../assets/imba.png'),
    },
    {
        id:'2',
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Electrical Engineering',
        img : require('../assets/electrical.png'),
    },
    {
        id:'3',
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Data Science',
        img : require('../assets/datascience.png'),
    },
    {
        id:'4',
        university: 'University of Colorado Boulder',
        degree: 'Master of Enginnering in Engineering Management',
        img : require('../assets/engmanage.png'),
    },
    {
        id:'5',
        university: 'Illionis Institute of technology',
        degree: 'Bachelor in Information Technology',
        img : require('../assets/infotech.png'),
    },
    {
        id:'6',
        university: 'International Institute of Information technology',
        degree: 'Master of Science in Information Technology',
        img : require('../assets/scinfo.png'),
    },
    {
        id:'7',
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Computer Science',
        img : require('../assets/computer.png'),
    },
    {
        id:'8',
        university: 'O.P. Jindal Global University',
        degree: 'MBA Business Analytics',
        img : require('../assets/jindal.png'),
    },
    {
        id:'9',
        university: 'Ball State University',
        degree: 'Master of Science in Data Science',
        img : require('../assets/ball.png'),
    },
    {
        id:'10',
        university: 'University of Illinois at Urbana-Champaign',
        degree: 'Master of Business Administration (IMBA)',
        img : require('../assets/datascience.png'),
    },
    {
        id:'11',
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Electrical Engineering',
        img : require('../assets/electrical.png'),
    },
    {
        id:'12',
        university: 'University of Colorado Boulder',
        degree: 'Master of Science in Data Science',
        img : require('../assets/scinfo.png'),
    },
];
  return (
    <div style={{padding: '50px'}}>
      <h1 style={{fontSize: '25px'}}>Find the right degree for you</h1>
      <Pagecontent currentPage={currentPage} programs={programs} programsPerPage={programsPerPage}/>
      <Getpage totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Pagination;
