import React from 'react';
import { Sidebar } from '../../Components';
import { meImg } from '../../Images';

const Settings: React.FC = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsDP">
            <img src={meImg} alt="" />
            <label htmlFor="fileInput" className="settingsDPIcon">
              <i className="far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sifatul" />
          <label>Email</label>
          <input type="email" placeholder="sifatul@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
