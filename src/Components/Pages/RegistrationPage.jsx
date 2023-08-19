import React, { useState } from 'react';
import style from "../Styles/RegistrationPage.css";
import {BiShow} from "react-icons/bi"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    age: '',
    address: '',
    gender: '',
    occupation: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading,setLoding]=useState(false)
  const navigate=useNavigate()

  
// Hide and Show Password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // input change event
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
// validation for add input field
  const validateForm = () => {
    const mobile=formData.mobileNumber.split("").map(Number)
    const newErrors = {};
  // name
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
// email
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid ';
    }
    
// password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    else if(formData.password.length<6){
      newErrors.password="Password must be longer than 5 digits"
    }
// mobile number
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    }
    else if (formData.mobileNumber.length!==10) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits ';
    }
    else if (mobile.includes(NaN)) {
      newErrors.mobileNumber = 'Mobile number must be numeric ';
    }
// age
    if (!formData.age) {
      newErrors.age = 'Age is required';
    }
    else if (formData.age.length<1 ||formData.age.length>3) {
      newErrors.age = 'Age must be require minimum 1 digit and maximum 3 digits';
    }
    else if (+formData.age<1) {
      newErrors.age = 'Age must be positive value';
    }
// address
    if (!formData.address) {
      newErrors.address = 'Address is required';
    }
// occupation
    if (!formData.occupation) {
      newErrors.occupation = 'Occupation is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoding(true)
    if (validateForm()) {
      console.log(formData)
      axios.post(`https://users-ut9o.onrender.com/users`,formData).then((res)=>{
        navigate("/")
        setErrors({});
        setLoding(false)
      })
      .catch((err)=>{
        console.log(err);
        // alert("err")
        setErrors({message:err.message})
        setLoding(false)
      })
      
    }
  };
  
console.log("ee",errors.occupation)
  return (
    <div className="registration-main-container">
      <div className="registration-container">
      <h2>Registration</h2>
      {Object.keys(errors).length>=1&& <p  style={{textAlign:"center",fontWeight:"600",fontStyle:"italic"}} className="error-message">{errors.message?errors.message:"Found one or more errors"}</p>}
      <form onSubmit={handleSubmit}>

        {/* name and email fields */}
       <div className="form_flex">
       <div className="form-group">
          <label>Name:</label>
          <input
           className='input_field'
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
           className='input_field'
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
           
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
       </div>
       {/*password and  mobile number fields  */}
        <div className="form_flex">
        <div className="form-group">
          <label>Mobile Number:</label>
          <input
          className='input_field'
            type="tel"
            maxLength={10}
            name="mobileNumber"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            // required
          />
          {errors.mobileNumber && <div className="error-message">{errors.mobileNumber}</div>}
        </div>
        <div className="form-group">
            <label>Password :</label>
          <div className="password-group">
        <input
        className='input_field'
        name="password"
        maxLength={30}
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <span className="toggle-icon" onClick={togglePasswordVisibility}>
        {
          <BiShow/>
        }
      </span>
          </div>
          {errors.password && <p  className="error-message">{errors.password}</p>}
        </div>
        </div>
        {/* Age and Gender */}
       <div className="form_flex">
       <div className="form-group">
          <label>Age:</label>
          <input
          className='input_field'
            type="number"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleInputChange}
            // required
          />
          {errors.age && <div className="error-message">{errors.age}</div>}
        </div>


        <div className="form-group">
          <label>Gender:</label>
          <select
          className='select_field'
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled style={{color:"gray"}}>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Address and Occupation */}
       </div>
        <div className="form_flex">
        <div className="form-group">
          <label>Address:</label>
          <input
          className='input_field'
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleInputChange}
            
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>
          <div className="form-group">
          <label>Occupation:</label>
          <input
          className='input_field'
            type="text"
            maxLength={50}
            name="occupation"
            placeholder="Enter your occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            // required
          />
          {errors.occupation && <p className="error-message">{errors.occupation}</p>}
        </div>
        
        </div>
        <button id='submit-utton' type="submit" disabled={loading} style={{ cursor:loading?"not-allowed":"pointer",backgroundColor:loading?"gray":""}}>Register</button>
      </form>
      <p className='have-an-account'>
          Already have an account please
          <strong onClick={()=>navigate("/")}>Sign in</strong>
        </p>
      
    </div>
    
    </div>
  );
};

export default RegistrationPage;
