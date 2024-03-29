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
        <button key={i} onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      {renderPageNumbers()}
      <p>Current Page: {currentPage}</p>
    </div>
  );
};

export default PaginationComponent;
