import React, { useState } from 'react';
import Getpage from './getPage';
import Pagecontent from './PageContent';
import {programs} from '../constants/data'

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const programsPerPage = 4;
  const totalPages = 3; 
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div style={{padding: '50px'}}>
      <h1 style={{fontSize: '25px'}}>Find the right degree for you</h1>
      <Pagecontent currentPage={currentPage} programs={programs} programsPerPage={programsPerPage}/>
      <Getpage totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Pagination;
