'use client'

import React, { useState, useEffect } from "react";
import DOMPurify from 'isomorphic-dompurify';

import styles from './form.module.css';
import './button.css';

const sanitizeInput = (input) => {
  const sanitizedInput = DOMPurify.sanitize(input);
  return sanitizedInput;
}

const Form = ({ buttonColor, buttonTextColor }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const sanitizedName = sanitizeInput(name);
    const sanitizedLocation = sanitizeInput(location);

    const formData = new FormData();
    formData.append('Email', email);
    formData.append('Name', sanitizedName);
    formData.append('Gender', gender);
    formData.append('Age', age);
    formData.append('Location', sanitizedLocation);

    setMessage('Signing up...');
    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEET_URL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setEmail('');
        setName('');
        setGender('');
        setAge('');
        setLocation('');
        setMessage('Success! Thank you for signing up to our waitlist!');
        setMessageType('success');
      } else {
        throw new Error('Error submitting form. Please try again later.');
      }
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setMessage('Network error. Please check your internet connection and try again.');
        setMessageType('error');
      } else {
        setMessage('An unexpected error occurred. Please try again later.');
      }
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isClient) return null;

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className={`${styles.inputRow} ${styles.emailRow}`}>
             <label htmlFor="e-mail">e-mail<span className={styles.required}>*</span></label>
             <input type="email" name="e-mail" id="e-mail" placeholder="myemail@example.com" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
           </div>
           <div className={`${styles.inputRow} ${styles.gapRow}`}>
             <div className={styles.inputCol}>
               <label htmlFor="name">Name<span className={styles.required}>*</span></label>
               <input type="text" name="name" maxLength={100} id="name" placeholder="e.g. Jane Doe" required onChange={(e)=>setName(e.target.value)}value={name}/>
             </div>
             <div className={styles.inputCol}>
               <label htmlFor="genderSelect">Gender</label>
               <select name="gender" id="genderSelect" onChange={(e) => setGender(e.target.value)} value={gender}>
                 <option value="" disabled="disabled">Select option</option>
                 <option value="woman">Woman</option>
                 <option value="man">Man</option>
                 <option value="transgender">Transgender</option>
                 <option value="nonBinaryConforming">Non-binary/non-conforming</option>
                 <option value="notListed">Not listed</option>
                 <option value="preferNotToRespond">Prefer not to respond</option>
               </select>
             </div>
           </div>
           <div className={`${styles.inputRow} ${styles.gapRow}`}>
             <div className={styles.inputCol}>
               <label htmlFor="ageSelect">Age</label>
               <select name="age" id="ageSelect" onChange={(e) => setAge(e.target.value)} value={age}>
                 <option value="" disabled="disabled">Select option</option>
                 <option value="13-18">13-18</option>
                 <option value="19-24">19-24</option>
                 <option value="25-34">25-34</option>
                 <option value="35-44">35-44</option>
                 <option value="45-54">45-54</option>
                 <option value="55-64">55-64</option>
                 <option value="65+">65 and over</option>
               </select>
             </div>
             <div className={styles.inputCol}>
               <label htmlFor="location">Country & City</label>
               <input type="text" name="location" maxLength={100} id="location" placeholder="e.g. Canada, Toronto" onChange={(e)=>setLocation(e.target.value)} value={location}/>
             </div>
           </div>
         </fieldset>
        <input type="submit" value="Sign Up to Waitlist" style={{ backgroundColor: buttonColor, color: buttonTextColor }} />
        <div className={`${styles.formMessages} ${styles[messageType]}`}>
          {message && <div><em>{message}</em></div>}
        </div>
      </form>
    </div>
  );
}

export default Form;