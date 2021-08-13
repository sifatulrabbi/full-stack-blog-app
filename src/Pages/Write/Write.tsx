import React from 'react';
import { img3 } from '../../Images';

const Write: React.FC = () => {
  return (
    <div className="write">
      <img src={img3} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput" className="writeIcon">
            <i className="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: 'none' }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            className="writeInput writeText"
          />
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
