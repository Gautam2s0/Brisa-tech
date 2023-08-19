import React, { useEffect } from 'react';
import '../Styles/Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const Navigate=useNavigate()
  const user = JSON.parse(localStorage.getItem('user'));
  const { name, email, mobileNumber, occupation, address, gender, age } = user||{};
  
  // log out button
  const logOut=()=>{
    localStorage.setItem("user",null)
    Navigate("/")
  }

useEffect(()=>{
  if(!user){
    Navigate("/")
  }

},[])
  return (
    <div className="card">
      <div className="profile-card">
      <div className="logout_button">
        <button className='logout_btn' onClick={logOut} >Logout</button>
      </div>
      <div className="profile-header">
        <img
          src="https://img.freepik.com/free-icon/user_318-563642.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h2 className="profile-name">{name.toUpperCase()}</h2>
      </div>
      <div className="profile-details">
        <p><strong>Email:</strong> <span>{email}</span></p>
        <p><strong>Mobile:</strong> <span>{mobileNumber}</span></p>
        <p><strong>Address:</strong> <span>{address}</span></p>
        <p><strong>Occupation:</strong> <span>{occupation}</span></p>
        <p><strong>Gender:</strong> <span>{gender}</span></p>
        <p><strong>Age:</strong> <span>{age} years</span></p>
      </div>
    </div>
    </div>
  );
};

export default Profile;
