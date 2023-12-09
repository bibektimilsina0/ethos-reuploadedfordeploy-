import { useState  } from "react";
import axios from 'axios';



const Login = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.get('http://192.168.74.56/php/ethoshackphp/SAFAR/php/users/userlogin.php', {
          params: {
            email,
            password,
          },
        });
        const data = response.data;
        if (data.status === 'success') {
          // Login successful, redirect or perform desired actions
        
          console.log('Logged in successfully');
        } else {
          // Handle login error
          setErrorMessage(data.message);
        }
      } catch (error) {
        // Handle network or server error
        console.error(error);
      }
    };
   
  
    return (
      <div>
        <h2>Login</h2>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" value="Submit">Login</button>
        </form>
    

      </div>
    );
  };
  
  export default Login;
  