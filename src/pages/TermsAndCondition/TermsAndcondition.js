import React from "react";
import { Link } from "react-router-dom";

const TermsAndcondition = () => {
  return (
    <div>
      <h3>Here is our Terms and Condition</h3>
      <p>Go back to Register</p>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default TermsAndcondition;
