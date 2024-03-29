import React, { useState } from 'react';
import PaginationComponent from './getPage';
import ContentComponent from './PageContent';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Set the total number of pages here

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
];
  return (
    <div>
      <h1>Pagination Example</h1>
      <ContentComponent currentPage={currentPage} programs={programs}/>
      <PaginationComponent totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Pagination;
