import React from 'react';
import '../styles/SiteHeader.css';

const SiteHeader = () => {
  return (
    <>
      <div className="my-full-name-and-title">
        <h1>
          <span className="my-first-name">giulia </span>
          <span className="my-last-name">galastro</span>
        </h1>
        <h2>SOFTWARE DEVELOPER</h2>
        <p>... watch this space!</p>
      </div>
    </>
  );
};

export default SiteHeader;
