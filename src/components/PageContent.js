import React from 'react';
import CardItem from './cardItem';
const ContentComponent = ({ currentPage, programs,programsPerPage }) => {
  const startIndex = (currentPage - 1) * programsPerPage;
  const endIndex = startIndex + programsPerPage;
  const currentPrograms = programs.slice(startIndex, endIndex);

  const getContentForPage = (page) => {
        return <div style={{display:'flex',gap:'30px', justifyContent:'center'}}>
            {currentPrograms.map((program, index) => (
                <CardItem key={index} program={program} />
            ))}
        </div>;
  };
  return (
    <div>
      {
        getContentForPage(currentPage)
      }
    </div>
  )
};

export default ContentComponent;
