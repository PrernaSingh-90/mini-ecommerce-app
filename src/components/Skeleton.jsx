import React from 'react';
import './Skeleton.css';

const Skeleton = () => {
  return (
    <div className='skeleton-card'>
      <div className="skeleton-img shimmer"></div>
      <div className="skeleton-text short shimmer"></div>
      <div className="skeleton-text long shimmer"></div>
      <div className="skeleton-btn shimmer"></div>
    </div>
  );
};

export default Skeleton
