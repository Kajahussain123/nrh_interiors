import React from 'react';
import { GridLoader, PropagateLoader , RiseLoader } from 'react-spinners';
import './Loader.css'; // Import CSS for styling the loader

const Loader = () => {
  return (
    <div className="loader-container" >
      <PropagateLoader  color="white" size={15} />
    </div>
  );
};

export default Loader;
