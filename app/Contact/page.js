import React from 'react';
import Navbar from '@/Components/navbar';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="form-container">
        <h1 className="form-title">Contact Me</h1>
        <form className="mt-8 space-y-4 w-full max-w-md">
          <div className="form-group">
            <label className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Message
            </label>
            <textarea
              className="form-textarea"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="form-button"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
