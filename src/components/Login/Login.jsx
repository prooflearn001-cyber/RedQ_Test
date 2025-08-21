import React, { useState } from 'react';
import './Login.css';

const Login = ({ onBackToHome, onSignUpClick }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt with email:', email);
    }, 1000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic here
  };

  const handleBackClick = () => {
    if (onBackToHome) {
      onBackToHome();
    }
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    if (onSignUpClick) {
      onSignUpClick();
    }
  };

  return (
    <div className="login-container">
      {/* Back Button */}
      <button 
        onClick={handleBackClick}
        className="back-button"
        aria-label="Back to home"
      >
        <svg className="back-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Back
      </button>

      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <h1 className="login-title">Log in to continue your learning journey</h1>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleEmailLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading || !email}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              <>
                <svg className="envelope-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Continue with email
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span className="divider-text">Other log in options</span>
        </div>

        {/* Social Login Buttons */}
        <div className="social-login">
          <button 
            onClick={() => handleSocialLogin('google')}
            className="social-button google-button"
            aria-label="Login with Google"
          >
            <svg className="google-icon" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
          
          <button 
            onClick={() => handleSocialLogin('facebook')}
            className="social-button facebook-button"
            aria-label="Login with Facebook"
          >
            <svg className="facebook-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
          
          <button 
            onClick={() => handleSocialLogin('apple')}
            className="social-button apple-button"
            aria-label="Login with Apple"
          >
            <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </button>
        </div>

        {/* Footer Links */}
        <div className="login-footer">
          <p className="signup-text">
            Don't have an account?{' '}
            <a href="#" onClick={handleSignUpClick} className="signup-link">Sign up</a>
          </p>
          <a href="/organization-login" className="organization-link">
            Log in with your organization
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
