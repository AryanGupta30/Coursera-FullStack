import React from 'react';
import CardItem from './cardItem';
const ContentComponent = ({ currentPage, programs }) => {
  const getContentForPage = (page) => {
    switch (page) {
      case 1:
        return <div style={{display:'flex'}}>
            {programs.map((program, index) => (
                <CardItem key={index} program={program} />
            ))}
        </div>;
      case 2:
        return <div><h2>Content for Page 2</h2></div>;
      case 3:
        return <div><h2>Content for Page 3</h2></div>;
      default:
        return <div>Invalid Page</div>;
    }
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
