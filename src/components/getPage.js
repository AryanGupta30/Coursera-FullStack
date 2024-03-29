import React, { useState } from 'react';

const PaginationComponent = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageChange(i)} style={{backgroundColor: currentPage === i ? '#00419e' : 'white',
        color: currentPage === i ? 'white' : 'black', border: '1px solid #ccc',}}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {renderPageNumbers()}
    </div>
  );
};

export default PaginationComponent;
