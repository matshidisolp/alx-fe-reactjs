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
    if (!username || !email || !password) {
        setError('All fields are required.');
        return;
    }

    setError('');
    console.log('User registered:', {username, email, password});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register (Controlled)</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                <label>Username:</label>
                <input 
                  type='text'
                  value={username}  //controlled input
                  onChange={(e) => setUsername(e.target.value)}
                  />
            </div>

            <div>
                <label>Email:</label>
                <input
                  type='email'
                  value={email}  //controlled input
                  onChange={(e) => setEmail(e.target.value)}
                  />
            </div>

            <div>
                <label>Password:</label>
                <input
                  type='password'
                  value={password}  //controlled input
                  onChange={(e) => setPassword(e.target.value)}
                  />
            </div>

            <button type='submit'>Register</button>
        </form>
    );
};

export default RegistrationForm;