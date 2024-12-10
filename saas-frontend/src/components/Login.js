import React from 'react';
import './login.css';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form's default submission behavior
    window.location.href = "http://localhost:5000/auth/google"; // Redirect URL
  };

  return (
    <>
      <div class="wrapper">
         <div class="title">
            Login Form
         </div>
         <form onSubmit={handleSubmit}>
            <div class="field">
            {/* <FontAwesomeIcon icon={faGoogle} style={{ marginRight: "10px" }} /> */}
              <input type="submit" value="Login with Google" />
            </div>
         </form>
      </div>
    </>
    // <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    //   <div className="login-container">
    //     <h2>Login</h2>
    //     <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
    //   </div>
    // </GoogleOAuthProvider>
  );
};

export default Login;
