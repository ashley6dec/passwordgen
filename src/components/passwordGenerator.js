import React, { useState } from 'react';
import './passwordGenerator.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const chars = {
      uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      lowercase: 'abcdefghijklmnopqrstuvwxyz',
      numbers: '0123456789',
      specialChars: '!@#$%^&*()-=_+[]{}|;:,.<>?'
    };

    let selectedChars = '';

    if (includeUppercase) selectedChars += chars.uppercase;
    if (includeLowercase) selectedChars += chars.lowercase;
    if (includeNumbers) selectedChars += chars.numbers;
    if (includeSpecialChars) selectedChars += chars.specialChars;

    let generatedPassword = '';
    if(passwordLength<8 || passwordLength >50){
    window.alert("Oops! Wrong length... Try Again!");
    generatedPassword += '';
    }
  else{
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      generatedPassword += selectedChars[randomIndex];
    }
  }
    setPassword(generatedPassword);
  };

 

  return (
    <div>
        <div className="passWordBox">
        Generated Password: <strong className='passWord'>{password}</strong>
      </div>
      <br/>
      <br/>
      <label>
        Password Length <strong>(**8-50 characters**)</strong>
        <input
          type="number"
          value={passwordLength}
         min={8}
         max={50}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
      </label>
      <br />
      <label>
        Include Uppercase:
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
      </label>
      <br />
      <label>
        Include Lowercase:
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
      </label>
      <br />
      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
      </label>
      <br />
      <label>
        Include Special Characters:
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        />
      </label>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <br />
      <br/>
      
     
    </div>
  );
};

export default PasswordGenerator;
