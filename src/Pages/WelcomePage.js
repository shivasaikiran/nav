import React, { useState } from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="welcome-container">
      <div className="content">
        <h1 className="main-heading">Welcome Home</h1>
        <p className="main-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus justo vel
          mauris consequat, at consequat leo venenatis.
        </p>
        {showMore && (
          <p className="more-text">
            More content goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus justo vel mauris consequat, at consequat leo venenatis.
          </p>
        )}
        <button onClick={toggleShowMore} className="read-more-btn">
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </div>
      <div className="image-container">
        <img
          src="https://i.pinimg.com/originals/5e/78/af/5e78affab2547d678e4c5458dd931381.gif"
          alt="Welcome"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
