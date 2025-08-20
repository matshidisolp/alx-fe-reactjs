import React, { useState} from 'react';

const RegistrationForm = () => {
    //State for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

    //Validation logic
    if (!username) newErrors.username = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    //If no errors then register user
    setErrors({});
        console.log('User registered:', {username, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register (Controlled)</h2>

            <div>
                <label>Username:</label>
                <input 
                  type='text'
                  value={username}  //controlled input
                  onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && <div style={{ color: "red" }}>{errors.username}</div>} 
            </div>

            <div>
                <label>Email:</label>
                <input
                  type='email'
                  value={email}  //controlled input
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            </div>

            <div>
                <label>Password:</label>
                <input
                  type='password'
                  value={password}  //controlled input
                  onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
            </div>

            <button type='submit'>Register</button>
        </form>
    );
};

export default RegistrationForm;