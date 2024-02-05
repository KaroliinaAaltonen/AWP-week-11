// MyHOC.js
import React, { useEffect } from 'react';

const MyHOC = (WrappedComponent, { name }) => {
  const HOC = () => {
    useEffect(() => {
      return () => {
      };
    }, []);

    return (
      <div className="wrapper">
        <WrappedComponent name={name} />
      </div>
    );
  };

  return <HOC />;
};

export default MyHOC;
