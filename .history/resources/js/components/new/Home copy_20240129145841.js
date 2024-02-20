// MainComponent.js

import React from 'react';

const MainComponent = ({ featured, popular }) => {
  const FeaturedContent = ({ data }) => (
    <div>
      <h2>Featured Content</h2>
      <div className="featured-container">
        {data.map((item) => (
          <div key={item.id} className="featured-item">
            <img src={item.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );

  const PopularContent = ({ data }) => (
    <div>
      <h2>Popular Content</h2>
      <div className="popular-container">
        {data.map((item) => (
          <div key={item.id} className="popular-item">
            <img src={item.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <FeaturedContent data={featured} />
      <PopularContent data={popular} />
    </div>
  );
};

export default MainComponent;
